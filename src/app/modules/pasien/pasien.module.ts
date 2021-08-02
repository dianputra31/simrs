import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasienRoutingModule } from './pasien-routing.module';
import { PasienLayoutComponent } from './pages/pasien-layout/pasien-layout.component';


@NgModule({
  declarations: [PasienLayoutComponent],
  imports: [
    CommonModule,
    PasienRoutingModule
  ]
})
export class PasienModule { }
