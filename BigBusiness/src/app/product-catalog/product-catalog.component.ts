import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {
  @Input() products: Product;
  @Output() addToCart = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  buyProduct(product: Product): void {
    this.addToCart.emit(product);
  }

}
