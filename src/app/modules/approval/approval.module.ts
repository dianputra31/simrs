import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { ApprovalRoutingModule } from './approval-routing.module';
import { AddressNotifComponent } from './components/address-notif/address-notif.component';
import { FilterDateComponent } from './components/filter-date/filter-date.component';
import { FilterDropdownComponent } from './components/filter-dropdown/filter-dropdown.component';
import { ItemSummaryDropdownComponent } from './components/item-summary-dropdown/item-summary-dropdown.component';
import { ResetFilterButtonComponent } from './components/reset-filter-button/reset-filter-button.component';
import { ApprovalLayoutComponent } from './pages/approval-layout/approval-layout.component';
import { ScrollableDirective } from './scrollable.directive';
import { ApprovalConfirmationDialogComponent } from './components/approval-confirmation-dialog/approval-confirmation-dialog.component';

@NgModule({
	declarations: [
		ApprovalLayoutComponent,
		ItemSummaryDropdownComponent,
		FilterDropdownComponent,
		ResetFilterButtonComponent,
		FilterDateComponent,
		AddressNotifComponent,
		ScrollableDirective,
		ApprovalConfirmationDialogComponent,
	],

	imports: [
		CommonModule,
		ApprovalRoutingModule,
		SharedModule,
		NgbDropdownModule,
		NgbModule,
	],
})
export class ApprovalModule {}
