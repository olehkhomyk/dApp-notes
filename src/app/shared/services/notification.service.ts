import { inject, Injectable } from '@angular/core';
import { Notification } from '@notes/shared/models/notification.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private toastService = inject(ToastrService);

  error({ message, config = {} }: Notification): void {
    this.toastService.error(message!, 'Error:', config);
  }

  success({ message, config = {}, }: Notification): void {
    this.toastService.success(message!, 'Success:', config);
  }

  warning({ message, config = {} }: Notification): void {
    this.toastService.warning(message!, 'Warning:', config);
  }
}
