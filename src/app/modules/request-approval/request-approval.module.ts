import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ItemListComponent } from './components/item-list/item-list.component';
import { RequestApprovalAddressComponent } from './components/request-approval-address/request-approval-address.component';
import { RequestApprovalLayoutComponent } from './pages/request-approval-layout/request-approval-layout.component';
import { RequestApprovalRoutingModule } from './request-approval-routing.module';
import { SuccessDialogComponent } from './components/success-dialog/success-dialog.component';

@NgModule({
	declarations: [
		RequestApprovalLayoutComponent,
		RequestApprovalAddressComponent,
		ItemListComponent,
		SuccessDialogComponent,
	],
	imports: [CommonModule, RequestApprovalRoutingModule, SharedModule],
})
export class RequestApprovalModule {}
