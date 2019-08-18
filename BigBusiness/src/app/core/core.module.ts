import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ProductService } from './services/product.service';
import { ProductDetailExistsGuard } from './guards/product-detail-exists.guard';
import { HttpClientModule } from '@angular/common/http';
import { FakeBackendService } from './services/fake-backend.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeBackendService)
  ],
  providers: [
    ShoppingCartService,
    ProductService,
    ProductDetailExistsGuard
  ]
})
export class CoreModule { }
