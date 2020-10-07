import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
	selector: 'dialog-waiting-approval',
	templateUrl: './dialog-waiting-approval.component.html',
	styleUrls: ['./dialog-waiting-approval.component.scss'],
})
export class DialogWaitingApprovalComponent implements OnInit {
	constructor(
		public dialogRef: MatDialogRef<DialogWaitingApprovalComponent>,
		@Inject(MAT_DIALOG_DATA) public modalData: any
	) {}

	ngOnInit(): void {}

	ok() {
		this.dialogRef.close('ok');
	}

	cancel() {
		this.dialogRef.close('cancel');
	}
}
