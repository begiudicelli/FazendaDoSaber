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
    path: 'escolha-regioes',
    loadComponent: () => import('./escolha-regioes/escolha-regioes.page').then( m => m.EscolhaRegioesPage)
  },
];
