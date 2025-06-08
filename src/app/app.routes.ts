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
  {
    path: 'confirma-regiao',
    loadComponent: () => import('./confirma-regiao/confirma-regiao.page').then( m => m.ConfirmaRegiaoPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'perguntas',
    loadComponent: () => import('./perguntas/perguntas.page').then( m => m.PerguntasPage)
  },  {
    path: 'configuracao',
    loadComponent: () => import('./configuracao/configuracao.page').then( m => m.ConfiguracaoPage)
  },

];
