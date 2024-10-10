import { Component, inject } from '@angular/core';
import { DashboardApiService } from '@notes/pages/dashboard/common/dashboard-api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tech-dashboard',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  private dashboardApiService = inject(DashboardApiService);

  constructor() {
    // this.dashboardApiService.testRequest();
  }

  test(): void {
    this.dashboardApiService.testRequest();
  }
}
