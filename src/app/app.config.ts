import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';
import { toastrConfig } from '@notes/shared/constants/toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { environment } from '../environments/environment';
import { ENVIRONMENT_TOKEN } from '@notes/core/tokens/environment.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideToastr(toastrConfig), provideAnimationsAsync(),
    { provide: ENVIRONMENT_TOKEN, useValue: environment }
  ]
};
