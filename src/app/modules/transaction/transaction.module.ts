import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockUIModule } from 'ng-block-ui';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedPipesModule } from '../../pipes/shared-pipes.module';
import { SharedModule } from '../../shared/shared.module';
import { Shared2Module } from '../../shared2/shared2.module';
import { BadgeComponent } from './components/badge/badge.component';
import { FilterDateComponent } from './components/filter-date/filter-date.component';
import { ItemTransactionComponent } from './components/item-transaction/item-transaction.component';
import { RatingReviewComponent } from './components/rating-review/rating-review.component';
import { ReceiptConfirmationComponent } from './components/receipt-confirmation/receipt-confirmation.component';
import { StatusButtonComponent } from './components/status-button/status-button.component';
import { TransactionLayoutComponent } from './pages/transaction-layout/transaction-layout.component';
import { TransactionRoutingModule } from './transaction-routing.module';

@NgModule({
	declarations: [
		TransactionLayoutComponent,
		StatusButtonComponent,
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
		SharedPipesModule,
		Shared2Module,
		BlockUIModule.forRoot(),
		InfiniteScrollModule,
	],
})
export class TransactionModule {}
