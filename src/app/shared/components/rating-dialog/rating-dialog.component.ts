import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
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
	constructor(
		public dialogRef: MatDialogRef<RatingDialogComponent>,
		public toastService: ToastService
	) {}

	ngOnInit(): void {}

	penilaianProduk(star) {
		this.ratingProduk = star;
	}

	penilaianPelayanan(star) {
		this.ratingPelayanan = star;
	}

	submitButtonClick() {
		this.ratingPelayanan;
		this.ratingProduk;
		this.komentar;

		this.dialogRef.close();
	}

	closeDialog() {
		this.dialogRef.close();
	}
}
