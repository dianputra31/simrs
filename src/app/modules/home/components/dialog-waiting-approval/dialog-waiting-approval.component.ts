import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
	selector: 'dialog-waiting-approval',
	templateUrl: './dialog-waiting-approval.component.html',
	styleUrls: ['./dialog-waiting-approval.component.scss'],
})
export class DialogWaitingApprovalComponent implements OnInit {
	nApproval: number;
	constructor(
		public dialogRef: MatDialogRef<DialogWaitingApprovalComponent>,
		@Inject(MAT_DIALOG_DATA) public modalData: any,
		private router: Router
	) {
		this.nApproval = modalData.numberOfApproval;
	}

	ngOnInit(): void {}

	ok() {
		this.router.navigate(['./approval']);
		this.dialogRef.close('ok');
	}
	close() {
		this.dialogRef.close();
	}
}
