import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './containers';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    SharedModule,
    LoginRoutingModule,
  ],
})
export class LoginModule { }
