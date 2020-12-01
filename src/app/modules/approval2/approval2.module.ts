import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockUIModule } from 'ng-block-ui';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedPipesModule } from '../../pipes/shared-pipes.module';
import { SharedModule } from '../../shared/shared.module';
import { Shared2Module } from '../../shared2/shared2.module';
import { ApprovalRoutingModule } from './approval-routing.module';
import { AddressWithNotifComponent } from './components/address-with-notif/address-with-notif.component';
import { ApprovalConfirmationDialogComponent } from './components/approval-confirmation-dialog/approval-confirmation-dialog.component';
import { ApprovalRejectDialogComponent } from './components/approval-reject-dialog/approval-reject-dialog.component';
import { ApprovalResultConfirmationDialogComponent } from './components/approval-result-confirmation-dialog/approval-result-confirmation-dialog.component';
import { FilterDateComponent } from './components/filter-date/filter-date.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemSummaryDropdownComponent } from './components/item-summary-dropdown/item-summary-dropdown.component';
import { ApprovalLayoutComponent } from './pages/approval-layout/approval-layout.component';

@NgModule({
	declarations: [
		ApprovalLayoutComponent,
		ItemSummaryDropdownComponent,
		AddressWithNotifComponent,
		FilterDateComponent,
		ItemCardComponent,
		ApprovalConfirmationDialogComponent,
		ApprovalResultConfirmationDialogComponent,
		ApprovalRejectDialogComponent,
	],
	imports: [
		CommonModule,
		ApprovalRoutingModule,
		SharedModule,
		Shared2Module,
		NgbDropdownModule,
		NgbModule,
		FormsModule,
		SharedPipesModule,
		BlockUIModule.forRoot(),
		InfiniteScrollModule,
	],
})
export class Approval2Module {}
