import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceiptConfirmationComponent } from './../receipt-confirmation/receipt-confirmation.component';

@Component({
	selector: 'item-transaction',
	templateUrl: './item-transaction.component.html',
	styleUrls: ['./item-transaction.component.scss']
})
export class ItemTransactionComponent implements OnInit {

	constructor(
		public dialog: MatDialog,
		private router: Router,
		private route: ActivatedRoute,
	) { }

	ngOnInit(): void {
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

}
