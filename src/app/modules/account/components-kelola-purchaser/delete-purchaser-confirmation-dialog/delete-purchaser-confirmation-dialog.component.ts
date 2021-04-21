import { Component, Inject, OnInit } from '@angular/core';
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import { RESPONSE, UserDeleteUrl } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';
@Component({
	selector: 'delete-purchaser-confirmation-dialog',
	templateUrl: './delete-purchaser-confirmation-dialog.component.html',
	styleUrls: ['./delete-purchaser-confirmation-dialog.component.scss'],
})
export class DeletePurchaserConfirmationDialogComponent implements OnInit {
	@BlockUI() blockUI: NgBlockUI;
	user;
	subscriptions: Subscription[] = [];
	constructor(
		public dialogRef: MatDialogRef<
			DeletePurchaserConfirmationDialogComponent
		>,
		@Inject(MAT_DIALOG_DATA) public modalData: any,
		private route: ActivatedRoute,
		private router: Router,
		public dialog: MatDialog,
		public http: HttpService,
		private dialogService: BaseService
	) {
		console.log(modalData.user);
		this.user = modalData.user;
	}

	ngOnInit(): void {}

	ngOnDestroy() {
		this.subscriptions.forEach((each) => each.unsubscribe);
	}

	hapus() {
		this.blockUI.start();
		const param = {};
		const sub = this.http
			.post(UserDeleteUrl + `?delete_email=${this.user.email}`, param)
			.subscribe(
				(resp) => {
					this.blockUI.stop();
					if (resp.status.rc == RESPONSE.SUCCESS) {
						this.dialogRef.close();
					} else {
						this.dialogService.showAlert(resp.status.msg);
					}
				},
				(error) => {
					this.blockUI.stop();
					this.http.handleError(error);
				}
			);

		this.subscriptions.push(sub);
	}

	tutupModal() {
		this.dialogRef.close();
	}
}
