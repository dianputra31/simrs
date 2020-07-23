import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RequestApprovalLayoutComponent } from './pages/request-approval-layout/request-approval-layout.component';
import { RequestApprovalRoutingModule } from './request-approval-routing.module';

@NgModule({
	declarations: [RequestApprovalLayoutComponent],
	imports: [CommonModule, RequestApprovalRoutingModule, SharedModule],
})
export class RequestApprovalModule {}
