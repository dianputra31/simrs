import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockUIModule } from 'ng-block-ui';
import { SharedPipesModule } from '../../pipes/shared-pipes.module';
import { SharedModule } from '../../shared/shared.module';
import { ApprovalRoutingModule } from './approval-routing.module';
import { ItemSummaryDropdownComponent } from './components/item-summary-dropdown/item-summary-dropdown.component';
import { ApprovalLayoutComponent } from './pages/approval-layout/approval-layout.component';
import { AddressWithNotifComponent } from './components/address-with-notif/address-with-notif.component';

@NgModule({
	declarations: [ApprovalLayoutComponent, ItemSummaryDropdownComponent, AddressWithNotifComponent],
	imports: [
		CommonModule,
		ApprovalRoutingModule,
		SharedModule,
		NgbDropdownModule,
		NgbModule,
		FormsModule,
		SharedPipesModule,
		BlockUIModule.forRoot(),
	],
})
export class Approval2Module {}
