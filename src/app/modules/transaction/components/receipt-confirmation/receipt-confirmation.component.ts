import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'receipt-confirmation',
	templateUrl: './receipt-confirmation.component.html',
	styleUrls: ['./receipt-confirmation.component.scss']
})
export class ReceiptConfirmationComponent implements OnInit {

	constructor(
		public dialogRef: MatDialogRef<ReceiptConfirmationComponent>,
		@Inject(MAT_DIALOG_DATA) public modalData: any,
		private route: ActivatedRoute,
		private router: Router,
		public dialog: MatDialog,
	) { }

	ngOnInit(): void {
	}

	tutupModal() {
		this.dialogRef.close();
	}

}
