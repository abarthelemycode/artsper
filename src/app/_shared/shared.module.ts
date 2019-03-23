import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PaginationComponent } from './components';

const MODULES_LIST = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
];

const COMPONENTS_LIST = [
  PaginationComponent
];

@NgModule({
  declarations: COMPONENTS_LIST,
  imports: MODULES_LIST,
  exports: [ MODULES_LIST, COMPONENTS_LIST]
})
export class SharedModule {}
