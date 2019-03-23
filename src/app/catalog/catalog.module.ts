import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { CatalogRoutingModule } from './catalog-routing.module';

import { CatalogComponent } from './containers';
import { CatalogFiltersComponent, BlockProductComponent } from './components';


@NgModule({
  declarations: [
    CatalogComponent,
    CatalogFiltersComponent,
    BlockProductComponent
  ],
  imports: [
    SharedModule,
    CatalogRoutingModule,
  ],
})
export class CatalogModule { }
