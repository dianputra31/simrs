import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrepaidComponent } from './pages/prepaid/prepaid.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RouterModule } from '@angular/router';
import { TransactionRoutingModule } from './transaction-routing.module';



@NgModule({
  declarations: [PrepaidComponent, LayoutComponent],
  imports: [
    CommonModule,RouterModule, TransactionRoutingModule
  ]
})
export class TransactionModule { }
