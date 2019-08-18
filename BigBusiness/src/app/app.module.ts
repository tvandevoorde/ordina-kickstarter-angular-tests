import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoreModule } from './core/core.module';
import { ProductCatalogModule } from './product-catalog/product-catalog.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { SharedModule } from './shared/shared.module';
import { ProductCatalogComponent } from './product-catalog/components/product-catalog/product-catalog.component';
import { ShoppingCartComponent } from './shopping-cart/components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductCatalogComponent },
  { path: 'shoppingcart', component: ShoppingCartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ProductCatalogModule,
    ShoppingCartModule,
    SharedModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
