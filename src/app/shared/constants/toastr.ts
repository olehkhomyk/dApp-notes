import { GlobalConfig } from 'ngx-toastr';

export const toastrConfig: Partial<GlobalConfig> = {
  maxOpened: 5,
  preventDuplicates: true,
  timeOut: 5000
};
