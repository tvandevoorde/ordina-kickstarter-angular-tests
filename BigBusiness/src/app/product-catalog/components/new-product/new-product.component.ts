import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private productService: ProductService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),
      price: this.formBuilder.control('', Validators.required)
    });
  }

  onSubmit(product: Product): void {
    this.productService.addProduct(product).subscribe(
      () => this.onProductAdded(),
      (e: any) => this.onError(e)
    );
  }
  onError(e: any) {
    throw new Error(e);
  }
  onProductAdded() {
    this.router.navigate(['/products']);
  }

}
