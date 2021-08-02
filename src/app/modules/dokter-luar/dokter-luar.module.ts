import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DokterLuarRoutingModule } from './dokter-luar-routing.module';
import { DokterLuarLayoutComponent } from './pages/dokter-luar-layout/dokter-luar-layout.component';


@NgModule({
  declarations: [DokterLuarLayoutComponent],
  imports: [
    CommonModule,
    DokterLuarRoutingModule
  ]
})
export class DokterLuarModule { }
