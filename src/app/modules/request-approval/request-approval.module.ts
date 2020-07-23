import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RequestApprovalLayoutComponent } from './pages/request-approval-layout/request-approval-layout.component';
import { RequestApprovalRoutingModule } from './request-approval-routing.module';
import { RequestApprovalAddressComponent } from './components/request-approval-address/request-approval-address.component';

@NgModule({
	declarations: [RequestApprovalLayoutComponent, RequestApprovalAddressComponent],
	imports: [CommonModule, RequestApprovalRoutingModule, SharedModule],
})
export class RequestApprovalModule {}
