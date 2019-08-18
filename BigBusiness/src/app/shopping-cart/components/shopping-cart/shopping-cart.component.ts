import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ShoppingCartItem } from '../../../core/models/shopping-cart-item.model';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  shoppingCartItems: ShoppingCartItem[];
  total: number;

  private subscriptions: Subscription[];

  constructor(private shoppingCartService: ShoppingCartService) {
    this.shoppingCartItems = [];
    this.subscriptions = [];
  }

  ngOnInit() {
    this.subscriptions.push(
      this.shoppingCartService.getShoppingCart().subscribe((shoppingCartItems: ShoppingCartItem[]) => {
        return this.shoppingCartItems = shoppingCartItems;
      }),
      this.shoppingCartService.getTotal().subscribe((total: number) => this.total = total)
    );
    this.shoppingCartService.loadShoppingCart();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  onRemoveItem(item: ShoppingCartItem): void {
    this.shoppingCartService.removeProduct(item);
  }

}
