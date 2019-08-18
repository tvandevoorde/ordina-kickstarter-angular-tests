import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { CatalogItemComponent } from './components/catalog-item/catalog-item.component';

@NgModule({
  declarations: [
    ProductCatalogComponent,
    CatalogItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCatalogComponent
  ]
})
export class ProductCatalogModule { }
