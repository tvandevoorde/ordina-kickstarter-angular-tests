import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ShoppingCartService,
    ProductService
  ]
})
export class CoreModule { }
