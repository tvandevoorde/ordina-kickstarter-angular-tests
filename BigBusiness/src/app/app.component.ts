import { Component } from '@angular/core';
import { Product } from './core/models/product.model';
import { ShoppingCartItem } from './core/models/shopping-cart-item.model';
import { ShoppingCartService } from './core/services/shopping-cart.service';
import { ProductCatalogService } from './core/services/product-catalog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  shoppingCart: ShoppingCartItem[];
  total: number;

  constructor(productService: ProductCatalogService,
              private shoppingCartService: ShoppingCartService) {
    this.products = productService.getProducts();
    this.shoppingCart = [];
    this.total = 0;
  }

  addToCart(product: Product): void {
    this.shoppingCartService.addToCart(product);
    this.shoppingCart = this.shoppingCartService.getShoppingCart();
    this.total = this.shoppingCartService.getTotal();
  }

  removeFromCart(item: ShoppingCartItem): void {
    this.shoppingCartService.removeFromCart(item);
    this.shoppingCart = this.shoppingCartService.getShoppingCart();
    this.total = this.shoppingCartService.getTotal();
  }

}
