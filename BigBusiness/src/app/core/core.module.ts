import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ProductService } from './services/product.service';
import { ProductDetailExistsGuard } from './guards/product-detail-exists.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ShoppingCartService,
    ProductService,
    ProductDetailExistsGuard
  ]
})
export class CoreModule { }
