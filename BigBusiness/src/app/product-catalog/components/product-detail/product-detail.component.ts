import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.productService.getProduct(parseInt(params.id, 10)).subscribe((product: Product) => {
        this.product = product;
      });
    });
  }

  buy(product: Product): void {
    this.shoppingCartService.addProduct(product);
  }

}
