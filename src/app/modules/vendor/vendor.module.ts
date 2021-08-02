import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorLayoutComponent } from './pages/vendor-layout/vendor-layout.component';


@NgModule({
  declarations: [VendorLayoutComponent],
  imports: [
    CommonModule,
    VendorRoutingModule
  ]
})
export class VendorModule { }
