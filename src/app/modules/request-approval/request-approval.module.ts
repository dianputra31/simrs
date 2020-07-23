import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestApprovalRoutingModule } from './request-approval-routing.module';
import { RequestApprovalLayoutComponent } from './pages/request-approval-layout/request-approval-layout.component';


@NgModule({
  declarations: [RequestApprovalLayoutComponent],
  imports: [
    CommonModule,
    RequestApprovalRoutingModule
  ]
})
export class RequestApprovalModule { }
