import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantity'
})
export class QuantityPipe implements PipeTransform {
  transform(quantity: number) {
    if (quantity > 1) {
      return `${quantity} pcs`;
    }

    return `${quantity} pc`;
  }

}
