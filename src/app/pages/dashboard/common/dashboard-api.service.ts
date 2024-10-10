import { inject, Injectable } from '@angular/core';
import { HttpClientApiService } from '@notes/core/http/http-client-api.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardApiService {
  private apiService = inject(HttpClientApiService);

  testRequest() {
    this.apiService.get('users').subscribe(console.log);
  }
}
