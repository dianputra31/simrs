import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'approval-result-confirmation-dialog',
	templateUrl: './approval-result-confirmation-dialog.component.html',
	styleUrls: ['./approval-result-confirmation-dialog.component.scss']
})
export class ApprovalResultConfirmationDialogComponent implements OnInit {

	constructor(
		public dialogRef: MatDialogRef<ApprovalResultConfirmationDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public modalData: any,
		private route: ActivatedRoute,
		private router: Router,
		public dialog: MatDialog,
	) { }

	ngOnInit(): void {
	}

	lihatTransaksi() {
		this.dialogRef.close();
		this.router.navigate(['./transaction']);
	}

	tutupModal() {
		this.dialogRef.close();
	}

}
