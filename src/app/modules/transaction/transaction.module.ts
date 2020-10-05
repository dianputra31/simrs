import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { BadgeComponent } from './components/badge/badge.component';
import { FilterButtonsSectionComponent } from './components/filter-buttons-section/filter-buttons-section.component';
import { FilterDateComponent } from './components/filter-date/filter-date.component';
import { ItemTransactionComponent } from './components/item-transaction/item-transaction.component';
import { ListStatusSectionComponent } from './components/list-status-section/list-status-section.component';
import { RatingReviewComponent } from './components/rating-review/rating-review.component';
import { ReceiptConfirmationComponent } from './components/receipt-confirmation/receipt-confirmation.component';
import { StatusButtonComponent } from './components/status-button/status-button.component';
import { TransactionLayoutComponent } from './pages/transaction-layout/transaction-layout.component';
import { TransactionRoutingModule } from './transaction-routing.module';

@NgModule({
	declarations: [
		TransactionLayoutComponent,
		ListStatusSectionComponent,
		StatusButtonComponent,
		FilterButtonsSectionComponent,
		FilterDateComponent,
		ItemTransactionComponent,
		BadgeComponent,
		ReceiptConfirmationComponent,
		RatingReviewComponent,
	],
	imports: [
		CommonModule,
		TransactionRoutingModule,
		SharedModule,
		NgbDropdownModule,
		NgbModule,
	],
})
export class TransactionModule { }
