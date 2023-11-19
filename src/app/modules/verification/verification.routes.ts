import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./verification.component').then(m => m.VerificationComponent)
  }
];
