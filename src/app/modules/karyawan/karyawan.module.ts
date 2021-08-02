import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KaryawanRoutingModule } from './karyawan-routing.module';
import { KaryawanLayoutComponent } from './pages/karyawan-layout/karyawan-layout.component';


@NgModule({
  declarations: [KaryawanLayoutComponent],
  imports: [
    CommonModule,
    KaryawanRoutingModule
  ]
})
export class KaryawanModule { }
