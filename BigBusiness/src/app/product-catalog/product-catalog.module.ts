import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { CatalogItemComponent } from './components/catalog-item/catalog-item.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductDetailExistsGuard } from '../core/guards/product-detail-exists.guard';
import { SharedModule } from '../shared/shared.module';
import { NewProductComponent } from './components/new-product/new-product.component';

const routes: Routes = [
  { path: 'products/:id', component: ProductDetailComponent, canActivate: [ ProductDetailExistsGuard ] },
  { path: 'product/new', component: NewProductComponent }
]

@NgModule({
  declarations: [
    ProductCatalogComponent,
    CatalogItemComponent,
    ProductDetailComponent,
    NewProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [
    ProductCatalogComponent,
    RouterModule
  ]
})
export class ProductCatalogModule { }
