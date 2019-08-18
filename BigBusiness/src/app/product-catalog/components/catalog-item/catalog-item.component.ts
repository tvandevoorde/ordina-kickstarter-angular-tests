import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent implements OnInit {
  @Input() product: Product;
  @Output() buyProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  buy(item: Product): void {
    this.buyProduct.emit(item);
  }

}
