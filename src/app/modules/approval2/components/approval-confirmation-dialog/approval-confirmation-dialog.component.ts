import { Component, Inject, OnInit } from '@angular/core';
import {
	MatDialog,
	MatDialogConfig,
	MatDialogRef,
	MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { ApprovalResultConfirmationDialogComponent } from '../approval-result-confirmation-dialog/approval-result-confirmation-dialog.component';

@Component({
	selector: 'approval-confirmation-dialog',
	templateUrl: './approval-confirmation-dialog.component.html',
	styleUrls: ['./approval-confirmation-dialog.component.scss'],
})
export class ApprovalConfirmationDialogComponent implements OnInit {
	subsribers: Subscription[];
	constructor(
		public dialogRef: MatDialogRef<ApprovalConfirmationDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public modalData: any,
		private route: ActivatedRoute,
		private router: Router,
		private service: BaseService,
		public dialog: MatDialog
	) {
		console.log(modalData);
		modalData.cartList;
	}

	ngOnInit(): void {
		this.subsribers = [];
	}

	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe);
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
		this.dialogRef.close('proses');
	}
}
