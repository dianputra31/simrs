import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApprovalResultConfirmationDialogComponent } from '../approval-result-confirmation-dialog/approval-result-confirmation-dialog.component';


@Component({
	selector: 'approval-confirmation-dialog',
	templateUrl: './approval-confirmation-dialog.component.html',
	styleUrls: ['./approval-confirmation-dialog.component.scss']
})
export class ApprovalConfirmationDialogComponent implements OnInit {

	constructor(
		public dialogRef: MatDialogRef<ApprovalConfirmationDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public modalData: any,
		private route: ActivatedRoute,
		private router: Router,
		public dialog: MatDialog,
	) { }

	ngOnInit(): void {
	}


	openDialogLocation(des) {
		//processing data
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-result-confirmation';
		dialogConfig.height = 'auto';
		dialogConfig.width = '477px';
		dialogConfig.height = '155px';
		dialogConfig.panelClass = 'border-radius:20px';
		dialogConfig.data = {
			pageBefore: this.router.url,
			pageDestination: des,
			modePopUp: '1',
		};
		const modalDialog = this.dialog.open(
			ApprovalResultConfirmationDialogComponent,
			dialogConfig
		);
		return false;
	}


	goesToPage(a) {
		this.dialogRef.close();
		this.router.navigate([a]);
	}

	tutupModal() {
		this.dialogRef.close();
	}

	proses() {
		this.dialogRef.close();
		this.openDialogLocation('./transaction');
	}

}
