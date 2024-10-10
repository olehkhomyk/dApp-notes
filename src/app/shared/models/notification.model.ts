import { IndividualConfig } from 'ngx-toastr';

export interface Error {
  message: string | null;
  status?: number | null;
}

export interface Notification {
  message: string | null;
  title?: string | null;
  config?: Partial<IndividualConfig>;
}
