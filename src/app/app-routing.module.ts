import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentLayoutComponent} from './layouts/content-layout/content-layout.component';
import { CONTENT_ROUTES } from './shared/routes/content-layout.routes';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: CONTENT_ROUTES
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
