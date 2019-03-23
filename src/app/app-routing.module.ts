import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard, LoggedGuard } from '@core/guards';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [LoggedGuard],
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'catalog',
    canActivate: [AuthGuard],
    loadChildren: './catalog/catalog.module#CatalogModule'
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
