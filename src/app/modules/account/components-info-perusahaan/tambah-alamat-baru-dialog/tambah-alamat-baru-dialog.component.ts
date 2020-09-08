import { Component, Inject, OnInit } from '@angular/core';
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'tambah-alamat-baru-dialog',
	templateUrl: './tambah-alamat-baru-dialog.component.html',
	styleUrls: ['./tambah-alamat-baru-dialog.component.scss'],
})
export class TambahAlamatBaruDialogComponent implements OnInit {
	constructor(
		public dialogRef: MatDialogRef<TambahAlamatBaruDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public modalData: any,
		private route: ActivatedRoute,
		private router: Router,
		public dialog: MatDialog
	) {}

	ngOnInit(): void {}

	lihatTransaksi() {
		this.dialogRef.close();
		// this.router.navigate(['./transaction']);
	}

	tutupModal() {
		this.dialogRef.close();
	}
}
