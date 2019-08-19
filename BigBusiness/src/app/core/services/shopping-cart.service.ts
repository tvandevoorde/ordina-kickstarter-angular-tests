import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ShoppingCartItem } from '../models/shopping-cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private shoppingCart: ShoppingCartItem[];
  private total: number;

  constructor() {
    this.shoppingCart = [];
    this.total = 0;
  }

  getShoppingCart(): ShoppingCartItem[] {
    return this.shoppingCart;
  }

  getTotal(): number {
    return this.total;
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

  removeFromCart(product: Product) {
    const shoppingCartItem = this.shoppingCart.find(i => i.name === product.name);
    const index = this.shoppingCart.indexOf(shoppingCartItem);
    this.shoppingCart.splice(index, 1);
  }

}
