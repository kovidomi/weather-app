import {Routes} from '@angular/router';

export const CONTENT_ROUTES: Routes = [
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule'
  }
];
