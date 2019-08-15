import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartItem } from '../shopping-cart-item.model';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() item: ShoppingCartItem;

  constructor() { }

  ngOnInit() {
  }

}
