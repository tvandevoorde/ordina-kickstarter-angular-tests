import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductCatalogService {
  private products: Product[];

  constructor() {
    this.products = [
      { name: 'PlayStation 4 Slim 500GB Black', price: 299 },
      { name: 'PlayStation 4 Pro 1TB Black', price: 399 },
      { name: 'Xbox One S White 1TB All-Digital Edition', price: 229 },
      { name: 'Xbox One X 1TB Gears 5 Limited Edition', price: 479 },
      { name: 'Nintendo Switch Neon Blue & Red', price: 329 },
      { name: 'Sony DualSHock 4 Controller V2 Glacier White PS4', price: 59.98 },
      { name: 'Afterglow LVL 3 Black Headset', price: 29.98 },
      { name: 'Turtle Beach Ear Force Recon 70 PS4 Gaming Headset', price: 29.98 },
      { name: 'MetalTech Wireless Controller Blue - Steelplay', price: 44.98 },
      { name: 'Xbox ELite Wireless Controller Series 2', price: 179.98 },
      { name: 'Razer Wolverine Tournament Edition Controller', price: 129.98 },
      { name: 'Nintendo Switch Wired Controller', price: 34.98 },
    ];
  }

  getProducts(): Product[] {
    return this.products;
  }
}
