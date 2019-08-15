import { Component } from '@angular/core';
import { Product } from './product.model';
import { ShoppingCartItem } from './shopping-cart-item.model';
import { QueryValueType } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  shoppingCart: ShoppingCartItem[];
  total: number = 0;

  constructor() {
    this.products = [
      { name: 'PlayStation 4 Slim 500GB Black', price: 299 },
      { name: 'PlayStation 4 Pro 1TB Black', price: 399 },
      { name: 'Xbox One S White 1TB All-Digital Edition', price: 229 },
      { name: 'Xbox One X 1TB Gears 5 Limited Edition', price: 479 },
      { name: 'Nintendo Switch Neon Blue & Red', price: 329 },
      { name: 'Sony DualSHock 4 Controller V2 Glacier White PS4', price: 59.98 },
      { name: 'Afterglow LVL 3 Black Headset', price: 29.98 },
      { name: 'Turtle Beach Ear Force Recon 70 PS4 Gaming Headset', price: 29.98 },
      { name: 'MetalTech Wireless Controller Blue - Steelplay', price: 44.98 },
      { name: 'Xbox ELite Wireless Controller Series 2', price: 179.98 },
      { name: 'Razer Wolverine Tournament Edition Controller', price: 129.98 },
      { name: 'Nintendo Switch Wired Controller', price: 34.98 },
    ];
    this.shoppingCart = [];
  }

    addToCart(product: Product): void {
      let shoppingCartItem = this.shoppingCart.find(i => i.name === product.name);
      if (!shoppingCartItem) {
        shoppingCartItem = {
          name: product.name,
          quantity: 1, price:
          product.price
        } as ShoppingCartItem;
        this.shoppingCart.push(shoppingCartItem);
      } else {
        shoppingCartItem.quantity++;
        shoppingCartItem.price += product.price;
      }
      this.total += product.price;
    }

}
