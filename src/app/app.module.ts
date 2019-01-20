import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import {
  LoginComponent,
  CatalogComponent,
  CatalogFiltersComponent,
  BlockProductComponent,
  PaginationComponent
} from './components'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CatalogComponent,
    CatalogFiltersComponent,
    BlockProductComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
