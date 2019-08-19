import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCatalogService } from './services/product-catalog.service';
import { ShoppingCartService } from './services/shopping-cart.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProductCatalogService,
    ShoppingCartService
  ]
})
export class CoreModule { }
