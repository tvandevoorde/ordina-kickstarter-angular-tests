import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuantityPipe } from './pipes/quantity.pipe';

@NgModule({
  declarations: [
    QuantityPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QuantityPipe
  ]
})
export class SharedModule { }
