import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { TambahAlamatBaruDialogComponent } from '../../components-info-perusahaan/tambah-alamat-baru-dialog/tambah-alamat-baru-dialog.component';

@Component({
	selector: 'account-info-perusahaan',
	templateUrl: './account-info-perusahaan.component.html',
	styleUrls: ['./account-info-perusahaan.component.scss'],
})
export class AccountInfoPerusahaanComponent implements OnInit {
	constructor(
		public dialog: MatDialog,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {}

	tambahAlamat() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = 'auto';
		dialogConfig.width = '1034px';
		dialogConfig.panelClass = 'border-radius:20px';
		dialogConfig.data = {
			pageBefore: this.router.url,
		};

		const modalDialog = this.dialog.open(
			TambahAlamatBaruDialogComponent,
			dialogConfig
		);

		return false;
	}
}
