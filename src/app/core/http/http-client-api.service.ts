import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpStatusCode } from '@notes/shared/constants/status-code';
import { HttpErrorHandlerService } from '@notes/core/error/http-error-handler.service';
import { ConfigService } from '@notes/shared/services/config.service';

@Injectable({
  providedIn: 'root'
})
export class HttpClientApiService {
  private readonly apiUrl: string;

  constructor(private httpClient: HttpClient,
              private httpErrorHandlerService: HttpErrorHandlerService,
              private configService: ConfigService) {
    this.apiUrl = configService.getConfig().apiUrl;
  }

  private getUrl(endpoint: string): string {
    return `${this.apiUrl}/${endpoint}`;
  }

  get<T>(endpoint: string, params: any = {}, options?: {
    headers?: HttpHeaders,
    skipErrors?: HttpStatusCode[],
    [key: string]: any
  }): Observable<T> {
    const { skipErrors, ...httpOptions } = options || {};
    const request$ = this.httpClient.get<T>(
      this.getUrl(endpoint),
      {
        ...httpOptions,
        observe: 'body',
        params
      });

    return this.httpErrorHandlerService.handleRequestError(request$, skipErrors);
  }

  post<T>(endpoint: string, body: any, params: any = {}, options?: {
    headers?: HttpHeaders,
    skipErrors?: HttpStatusCode[]
  }): Observable<T> {
    const { skipErrors, ...httpOptions } = options || {};
    const request$ = this.httpClient.post<T>(
      this.getUrl(endpoint), body,
      {
        ...httpOptions,
        observe: 'body',
        params
      });

    return this.httpErrorHandlerService.handleRequestError(request$, skipErrors);
  }

  put<T>(endpoint: string, body: any, params: any = {}, options?: {
    headers?: HttpHeaders,
    skipErrors?: HttpStatusCode[]
  }): Observable<T> {
    const { skipErrors, ...httpOptions } = options || {};
    const request$ = this.httpClient.put<T>(
      this.getUrl(endpoint), body,
      {
        ...httpOptions,
        observe: 'body',
        params
      });

    return this.httpErrorHandlerService.handleRequestError(request$, skipErrors);
  }

  delete<T>(endpoint: string, params: any = {}, options?: {
    headers?: HttpHeaders,
    skipErrors?: HttpStatusCode[]
  }): Observable<T> {
    const { skipErrors, ...httpOptions } = options || {};
    const request$ = this.httpClient.delete<T>(
      this.getUrl(endpoint), {
        ...httpOptions,
        observe: 'body',
        params
      });

    return this.httpErrorHandlerService.handleRequestError(request$, skipErrors);
  }
}
