import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankRoutingModule } from './bank-routing.module';
import { BankLayoutComponent } from './pages/bank-layout/bank-layout.component';


@NgModule({
  declarations: [BankLayoutComponent],
  imports: [
    CommonModule,
    BankRoutingModule
  ]
})
export class BankModule { }
