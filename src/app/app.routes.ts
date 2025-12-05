import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'plans',
    loadComponent: () => import('./pages/plans/plans.page').then( m => m.PlansPage)
  },
  {
    path: 'workout',
    loadComponent: () => import('./pages/workout/workout.page').then( m => m.WorkoutPage)
  },
  {
    path: 'progress',
    loadComponent: () => import('./pages/progress/progress.page').then( m => m.ProgressPage)
  },
  {
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings.page').then( m => m.SettingsPage)
  },
];
