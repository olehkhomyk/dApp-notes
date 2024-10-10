import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@tech/pages/dashboard/features/dashboard/dashboard.component')
        .then(m => m.DashboardComponent)
  },
];
