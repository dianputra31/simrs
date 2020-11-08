import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedPipesModule } from '../../pipes/shared-pipes.module';
import { SharedModule } from '../../shared/shared.module';
import { ItemCard2Component } from './components/item-card2/item-card2.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { RequestApprovalAddressComponent } from './components/request-approval-address/request-approval-address.component';
import { SuccessDialogComponent } from './components/success-dialog/success-dialog.component';
import { RequestApprovalLayoutComponent } from './pages/request-approval-layout/request-approval-layout.component';
import { RequestApprovalRoutingModule } from './request-approval-routing.module';

@NgModule({
	declarations: [
		RequestApprovalLayoutComponent,
		RequestApprovalAddressComponent,
		ItemListComponent,
		SuccessDialogComponent,
		ItemCard2Component,
	],
	imports: [
		CommonModule,
		RequestApprovalRoutingModule,
		SharedModule,
		SharedPipesModule,
	],
})
export class RequestApprovalModule {}
