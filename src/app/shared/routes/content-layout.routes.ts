import {Routes} from '@angular/router';

export const CONTENT_ROUTES: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../../modules/home/home.module').then(m => m.HomeModule)
  },
  { path: '',
    loadChildren: () => import('../../modules/home/home.module').then(m => m.HomeModule)
  }
];
