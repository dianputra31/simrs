import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierLayoutComponent } from './pages/supplier-layout/supplier-layout.component';


@NgModule({
  declarations: [SupplierLayoutComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule
  ]
})
export class SupplierModule { }
