import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpStatusCode } from '@notes/shared/constants/status-code';
import { NotificationService } from '@notes/shared/services/notification.service';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { includes, isEmpty } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService {
  constructor(private notification: NotificationService) {
  }

  handleRequestError<T>(observable: Observable<T>, skipErrors?: HttpStatusCode[]): Observable<T> {
    return observable.pipe(
      catchError(error => {
        if (HttpErrorHandlerService.isErrorShouldBeSkipped(error, skipErrors)) {
          return of(error);
        } else {
          this.handleError(error);
          return throwError(() => error);
        }
      })
    );
  }

  public handleError(error: any): void {
    const httpError = error as HttpErrorResponse;
    const message = error?.error?.message || error?.message;

    switch (httpError.status) {
      case HttpStatusCode.UNAUTHORIZED:
      case HttpStatusCode.FORBIDDEN:
      case HttpStatusCode.NOT_FOUND:
      case HttpStatusCode.INTERNAL_SERVER_ERROR:
      case HttpStatusCode.BAD_REQUEST:
      case HttpStatusCode.PRECONDITION_FAILED:
        this.notification.error({ message });
        break;
      default:
        this.notification.error({ message });
        break;
    }
  }

  public static isErrorShouldBeSkipped(error: any, skipErrors: HttpStatusCode[] | undefined): boolean {
    if (isEmpty(skipErrors)) {
      return false;
    }

    const httpError = error as HttpErrorResponse;

    return includes(skipErrors, (httpError.status));
  }
}
