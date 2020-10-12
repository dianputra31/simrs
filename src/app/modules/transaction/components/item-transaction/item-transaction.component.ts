import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionItemResponseModel } from '../../../../models/transaction-item-response.model';
import { ReceiptConfirmationComponent } from './../receipt-confirmation/receipt-confirmation.component';
// import { FilterInputComponent } from '../../../../shared/components/filter-input/filter-input.component'

@Component({
	selector: 'item-transaction',
	templateUrl: './item-transaction.component.html',
	styleUrls: ['./item-transaction.component.scss'],
})
export class ItemTransactionComponent implements OnInit {
	@Input() items: TransactionItemResponseModel[];
	second;
	fourth;
	sixth;
	// items;
	// keyword;
	// filterservicesubscription;

	filternya;

	// keywordSearch: FilterInputComponent = new FilterInputComponent()
	constructor(
		public dialog: MatDialog,
		private router: Router,
		private route: ActivatedRoute // private filterservice: FilterInputComponent,
	) {}

	ngOnInit(): void {}

	getTrxHist() {
		// console.log("thisval in item-transaction: ", keyword)
		// this.filterservicesubscription = this.filterservice
	}

	openDialogLocation(des) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.width = '475px';
		dialogConfig.height = '180px';
		dialogConfig.panelClass = 'border-radius:10px';
		dialogConfig.data = {
			pageBefore: this.router.url,
			pageDestination: des,
		};

		const modalDialog = this.dialog.open(
			ReceiptConfirmationComponent,
			dialogConfig
		);

		return false;
	}

	selesai() {
		this.openDialogLocation(['./transaction']);
	}

	carilagi() {
		this.router.navigate(['./pilih-produk']);
	}

	belilagi() {
		this.router.navigate(['./pilih-produk']);
	}

	ajukanlagi() {
		this.router.navigate(['./pilih-produk']);
	}

	carisejenis() {
		this.router.navigate(['./pilih-produk']);
	}

	viewDetail() {
		this.router.navigate(['./transaction-detail']);
	}

	onImgError(event) {
		event.target.src = '../../../../assets/image/icons/default-item.png';
	}
}
