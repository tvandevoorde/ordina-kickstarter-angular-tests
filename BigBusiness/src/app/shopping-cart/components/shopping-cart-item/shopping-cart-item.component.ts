import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingCartItem } from '../../../core/models/shopping-cart-item.model';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() item: ShoppingCartItem;
  @Output() removeItem = new EventEmitter<ShoppingCartItem>();

  constructor() { }

  ngOnInit() {
  }

  onRemove(item: ShoppingCartItem): void {
    this.removeItem.emit(item);
  }

}
