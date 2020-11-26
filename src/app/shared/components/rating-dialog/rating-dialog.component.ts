import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RateUrl } from '../../../app.constant';
import { HttpService } from '../../../core/base-service/http.service';
import { ToastService } from '../../toast/toast-service';
@Component({
	selector: 'rating-dialog',
	templateUrl: './rating-dialog.component.html',
	styleUrls: ['./rating-dialog.component.scss'],
})
export class RatingDialogComponent implements OnInit {
	ratingProduk = 0;
	ratingPelayanan = 0;
	komentar = '';
	modalData;
	constructor(
		public httpService: HttpService,
		public dialogRef: MatDialogRef<RatingDialogComponent>,
		public toastService: ToastService,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.modalData = data;
	}

	ngOnInit(): void {}

	penilaianProduk(star) {
		this.ratingProduk = star;
	}

	penilaianPelayanan(star) {
		this.ratingPelayanan = star;
	}

	submitButtonClick() {
		var x = `${RateUrl}?
		order_code=${this.modalData.order_code}&
		item_id=${this.modalData.item_id}&
		product_rate=${this.ratingProduk}&
		service_rate=${this.ratingPelayanan}&
		comment_rate=${this.komentar}`;

		console.log(x);
		this.httpService.post(x, {}).subscribe((resp) => {
			console.log(resp);
		});
		this.dialogRef.close();
	}

	closeDialog() {
		this.dialogRef.close();
	}
}
