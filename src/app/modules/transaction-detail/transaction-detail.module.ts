import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionDetailRoutingModule } from './transaction-detail-routing.module';
import { TransactionDetailLayoutComponent } from './pages/transaction-detail-layout/transaction-detail-layout.component';


@NgModule({
  declarations: [TransactionDetailLayoutComponent],
  imports: [
    CommonModule,
    TransactionDetailRoutingModule
  ]
})
export class TransactionDetailModule { }
