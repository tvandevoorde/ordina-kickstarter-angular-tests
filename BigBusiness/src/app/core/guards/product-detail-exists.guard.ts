import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';

@Injectable()
export class ProductDetailExistsGuard implements CanActivate {

  constructor(private productService: ProductService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const id = route.params.id;
    if (!id || !this.productService.productExists(parseInt(id, 10))) {
      return false;
    }
    return true;
  }
}
