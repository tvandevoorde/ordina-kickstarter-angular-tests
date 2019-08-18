import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartItem } from '../../../core/models/shopping-cart-item.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Input() shoppingCartItems: ShoppingCartItem[];
  @Input() total: number;

  constructor() { }

  ngOnInit() {
  }

}
