import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { ApprovalRoutingModule } from './approval-routing.module';
import { ItemSummaryDropdownComponent } from './components/item-summary-dropdown/item-summary-dropdown.component';
import { ApprovalLayoutComponent } from './pages/approval-layout/approval-layout.component';
import { FilterDropdownComponent } from './components/filter-dropdown/filter-dropdown.component';
import { ResetFilterButtonComponent } from './components/reset-filter-button/reset-filter-button.component';

@NgModule({
	declarations: [ApprovalLayoutComponent, ItemSummaryDropdownComponent, FilterDropdownComponent, ResetFilterButtonComponent],
	imports: [
		CommonModule,
		ApprovalRoutingModule,
		SharedModule,
		NgbDropdownModule,
		NgbModule,
	],
})
export class ApprovalModule {}
