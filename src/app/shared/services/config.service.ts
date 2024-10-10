import { Inject, Injectable } from '@angular/core';
import { ENVIRONMENT_TOKEN } from '@notes/core/tokens/environment.token';
import { Environment } from '@notes/shared/models/environment.model';
import { GlobalConfig } from '@notes/shared/models/global-config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(@Inject(ENVIRONMENT_TOKEN) private readonly environment: Environment) {
    console.log(environment, 'ENVIRONMENT Injected in ConfigService');
    // EMPTY
  }

  getConfig(): GlobalConfig {
    return {
      apiUrl: this.environment.apiUrlLocal
    };
  }
}
