import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuantityPipe } from './pipes/quantity.pipe';
import { NavbarToggleDirective } from './directives/navbar-toggle.directive';

@NgModule({
  declarations: [
    QuantityPipe,
    NavbarToggleDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QuantityPipe,
    NavbarToggleDirective
  ]
})
export class SharedModule { }
