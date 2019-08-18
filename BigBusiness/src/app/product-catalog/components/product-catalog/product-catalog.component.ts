import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit, OnDestroy {
  products: Product[] = [];

  private subscriptions: Subscription[];

  constructor(private productService: ProductService, private shoppingCartService: ShoppingCartService) {
    this.products = [];
    this.subscriptions = [];
  }

  ngOnInit() {
    this.subscriptions.push(
      this.productService.getProducts().subscribe((products: Product[]) => {
        this.products = products;
      })
    );

    this.productService.loadProducts();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  buyProduct(product: Product): void {
    this.shoppingCartService.addProduct(product);
  }

}
