import { InjectionToken } from '@angular/core';
import { Environment } from '@notes/shared/models/environment.model';

export const ENVIRONMENT_TOKEN = new InjectionToken<Environment>('notes.environment');
