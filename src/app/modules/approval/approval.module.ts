import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { ApprovalRoutingModule } from './approval-routing.module';
import { AddressNotifComponent } from './components/address-notif/address-notif.component';
import { ApprovalConfirmationDialogComponent } from './components/approval-confirmation-dialog/approval-confirmation-dialog.component';
import { ApprovalResultConfirmationDialogComponent } from './components/approval-result-confirmation-dialog/approval-result-confirmation-dialog.component';
import { FilterDateComponent } from './components/filter-date/filter-date.component';
import { FilterDropdownComponent } from './components/filter-dropdown/filter-dropdown.component';
import { ItemApprovalComponent } from './components/item-approval/item-approval.component';
import { ItemListSectionComponent } from './components/item-list-section/item-list-section.component';
import { ItemSummaryDropdownComponent } from './components/item-summary-dropdown/item-summary-dropdown.component';
import { ResetFilterButtonComponent } from './components/reset-filter-button/reset-filter-button.component';
import { ApprovalLayoutComponent } from './pages/approval-layout/approval-layout.component';
import { ScrollableDirective } from './scrollable.directive';

@NgModule({
	declarations: [
		ApprovalLayoutComponent,
		ItemSummaryDropdownComponent,
		FilterDropdownComponent,
		ResetFilterButtonComponent,
		FilterDateComponent,
		AddressNotifComponent,
		ScrollableDirective,
		ItemApprovalComponent,
		ItemListSectionComponent,
		ApprovalConfirmationDialogComponent,
		ApprovalResultConfirmationDialogComponent,
	],

	imports: [
		CommonModule,
		ApprovalRoutingModule,
		SharedModule,
		NgbDropdownModule,
		NgbModule,
	],
})
export class ApprovalModule { }
