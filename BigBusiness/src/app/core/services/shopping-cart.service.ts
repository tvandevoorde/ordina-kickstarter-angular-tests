import { Injectable, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';
import { ShoppingCartItem } from '../models/shopping-cart-item.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private shoppingCart: ShoppingCartItem[];
  private total: number;
  private shoppingCart$ = new EventEmitter<ShoppingCartItem[]>();
  private total$ = new EventEmitter<number>();

  constructor() {
    this.shoppingCart = [];
    this.total = 0;
  }

  getShoppingCart(): Observable<ShoppingCartItem[]> {
    return this.shoppingCart$;
  }

  getTotal(): Observable<number> {
    return this.total$;
  }

  addProduct(product: Product): void {
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
    this.shoppingCart$.next(this.shoppingCart);
    this.total$.next(this.total);
  }

  removeProduct(shoppingCartItem: ShoppingCartItem): void {
    this.total -= shoppingCartItem.price;
    const index = this.shoppingCart.indexOf(shoppingCartItem);
    this.shoppingCart.splice(index, 1);
    this.shoppingCart$.next(this.shoppingCart);
    this.total$.next(this.total);
  }

  public loadShoppingCart(): void {
    this.shoppingCart$.emit(this.shoppingCart);
    this.total$.emit(this.total);
  }
}
