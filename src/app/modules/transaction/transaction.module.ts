import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { FilterButtonsSectionComponent } from './components/filter-buttons-section/filter-buttons-section.component';
import { FilterDateComponent } from './components/filter-date/filter-date.component';
import { ListStatusSectionComponent } from './components/list-status-section/list-status-section.component';
import { StatusButtonComponent } from './components/status-button/status-button.component';
import { TransactionLayoutComponent } from './pages/transaction-layout/transaction-layout.component';
import { TransactionRoutingModule } from './transaction-routing.module';
import { ItemTransactionComponent } from './components/item-transaction/item-transaction.component';
import { BadgeComponent } from './components/badge/badge.component';

@NgModule({
	declarations: [
		TransactionLayoutComponent,
		ListStatusSectionComponent,
		StatusButtonComponent,
		FilterButtonsSectionComponent,
		FilterDateComponent,
		ItemTransactionComponent,
		BadgeComponent,
	],
	imports: [
		CommonModule,
		TransactionRoutingModule,
		SharedModule,
		NgbDropdownModule,
		NgbModule,
	],
})
export class TransactionModule {}
