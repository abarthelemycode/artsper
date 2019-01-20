import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent, CatalogComponent } from './components'

import { AuthGuard, LoggedGuard } from './_guards'

const routes: Routes = [
  {
    path: 'login',
    canActivate:[LoggedGuard],
    component : LoginComponent
  },
  {
    path: 'catalog',
    canActivate:[AuthGuard],
    component : CatalogComponent,
  },
  {
    path: '',
    redirectTo: 'catalog',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'catalog',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
