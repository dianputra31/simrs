import { Component, Inject, OnInit } from '@angular/core';
import {
	MatDialog,
	MatDialogConfig,
	MatDialogRef,
	MAT_DIALOG_DATA,
} from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { RESPONSE, TransactionConfirmUrl } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { RatingDialogComponent } from '../../../../shared/components/rating-dialog/rating-dialog.component';

@Component({
	selector: 'receipt-confirmation',
	templateUrl: './receipt-confirmation.component.html',
	styleUrls: ['./receipt-confirmation.component.scss'],
})
export class ReceiptConfirmationComponent implements OnInit {
	constructor(
		public dialogRef: MatDialogRef<ReceiptConfirmationComponent>,
		@Inject(MAT_DIALOG_DATA) public modalData: any,
		private route: ActivatedRoute,
		private router: Router,
		public dialog: MatDialog,
		public http: HttpService,
		public service: BaseService
	) {}

	ngOnInit(): void {}

	tutupModal() {
		this.dialogRef.close();
	}

	terima() {
		// console.log(this.modalData.item_id + ' | ' + this.modalData.order_code)
		const sub = this.http
			.post(
				TransactionConfirmUrl +
					'/' +
					this.modalData.order_code +
					'/' +
					this.modalData.item_id,
				{}
			)
			.subscribe((resp) => {
				if (resp.status.rc === RESPONSE.SUCCESS) {
					this.dialogRef.close('selesai');
					this.ratingDialogLocation();
				} else {
					this.service.showAlert(resp.status.msg);
				}
			});
	}

	ratingDialogLocation() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.width = '488px';
		dialogConfig.height = '367px';
		dialogConfig.panelClass = 'border-radius:50px';
		dialogConfig.data = {
			order_code: this.modalData.order_code,
			item_id: this.modalData.item_id,
		};

		const modalDialog = this.dialog.open(
			RatingDialogComponent,
			dialogConfig
		);

		modalDialog.afterClosed().subscribe((data) => {});

		return false;
	}
}
