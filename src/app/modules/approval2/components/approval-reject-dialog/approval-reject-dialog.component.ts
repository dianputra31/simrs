import { Component, Inject, OnInit } from '@angular/core';
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'approval-reject-dialog',
	templateUrl: './approval-reject-dialog.component.html',
	styleUrls: ['./approval-reject-dialog.component.scss'],
})
export class ApprovalRejectDialogComponent implements OnInit {
	reason = '';
	constructor(
		public dialogRef: MatDialogRef<ApprovalRejectDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public modalData: any,
		private route: ActivatedRoute,
		private router: Router,
		public dialog: MatDialog
	) {}

	ngOnInit(): void {}

	tutupModal() {
		this.dialogRef.close();
	}

	actionTolak() {
		const param = {
			action: 'tolak',
			message: this.reason,
		};
		this.dialogRef.close(param);
	}
}
