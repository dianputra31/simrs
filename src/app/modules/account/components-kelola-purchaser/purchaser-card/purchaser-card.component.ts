import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { DeletePurchaserConfirmationDialogComponent } from '../delete-purchaser-confirmation-dialog/delete-purchaser-confirmation-dialog.component';

@Component({
	selector: 'purchaser-card',
	templateUrl: './purchaser-card.component.html',
	styleUrls: ['./purchaser-card.component.scss'],
})
export class PurchaserCardComponent implements OnInit {
	constructor(public dialog: MatDialog, private router: Router) {}

	ngOnInit(): void {}

	delete() {
		console.log('test');
	}

	actionTolak() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = 'auto';
		dialogConfig.width = '477px';
		dialogConfig.height = '128px';
		dialogConfig.panelClass = 'border-radius:20px';
		dialogConfig.data = {
			pageBefore: this.router.url,
		};

		const modalDialog = this.dialog.open(
			DeletePurchaserConfirmationDialogComponent,
			dialogConfig
		);

		return false;
	}
}
