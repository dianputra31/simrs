import { Component, Inject, OnInit } from '@angular/core';
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
	selector: 'delete-purchaser-confirmation-dialog',
	templateUrl: './delete-purchaser-confirmation-dialog.component.html',
	styleUrls: ['./delete-purchaser-confirmation-dialog.component.scss'],
})
export class DeletePurchaserConfirmationDialogComponent implements OnInit {
	constructor(
		public dialogRef: MatDialogRef<
			DeletePurchaserConfirmationDialogComponent
		>,
		@Inject(MAT_DIALOG_DATA) public modalData: any,
		private route: ActivatedRoute,
		private router: Router,
		public dialog: MatDialog
	) {}

	ngOnInit(): void {}

	lihatTransaksi() {
		this.dialogRef.close();
		// this.router.navigate(['./transaction']);
	}

	tutupModal() {
		this.dialogRef.close();
	}
}
