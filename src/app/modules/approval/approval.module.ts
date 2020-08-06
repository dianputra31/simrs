import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { ApprovalRoutingModule } from './approval-routing.module';
import { AddressButtonNotifComponent } from './components/address-button-notif/address-button-notif.component';
import { AddressNotifComponent } from './components/address-notif/address-notif.component';
import { ItemSummaryDropdownComponent } from './components/item-summary-dropdown/item-summary-dropdown.component';
import { ApprovalLayoutComponent } from './pages/approval-layout/approval-layout.component';
import { ScrollableDirective } from './scrollable.directive';

@NgModule({
	declarations: [ApprovalLayoutComponent, ItemSummaryDropdownComponent, AddressButtonNotifComponent, AddressNotifComponent, ScrollableDirective],
	imports: [
		CommonModule,
		ApprovalRoutingModule,
		SharedModule,
		NgbDropdownModule,
		NgbModule,
	],
})
export class ApprovalModule { }
