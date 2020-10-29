import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddressList } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { EditAlamatDialogComponent } from '../../components-info-perusahaan/edit-alamat-dialog/edit-alamat-dialog.component';
import { TambahAlamatBaruDialogComponent } from '../../components-info-perusahaan/tambah-alamat-baru-dialog/tambah-alamat-baru-dialog.component';
import { TrashCanDialogComponent } from '../../components-info-perusahaan/trash-can-dialog/trash-can-dialog.component';

@Component({
	selector: 'account-info-perusahaan',
	templateUrl: './account-info-perusahaan.component.html',
	styleUrls: ['./account-info-perusahaan.component.scss'],
})
export class AccountInfoPerusahaanComponent implements OnInit {
	subscribers: Subscription[];
	addresses: any[];
	constructor(
		public dialog: MatDialog,
		private route: ActivatedRoute,
		private router: Router,
		private http: HttpService
	) {}

	ngOnInit(): void {
		this.subscribers = [];
		this.getAddressList();
	}

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

		modalDialog.afterClosed().subscribe((result) => {
			this.getAddressList();
		});
		return false;
	}

	getAddressList() {
		const url = AddressList;
		const sub = this.http.get(url).subscribe((resp) => {
			this.addresses = resp.data;
		});
		this.subscribers.push(sub);
	}

	editAddress(address) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = 'auto';
		dialogConfig.width = '1034px';
		dialogConfig.panelClass = 'border-radius:20px';
		dialogConfig.data = {
			address,
		};

		const modalDialog = this.dialog.open(
			EditAlamatDialogComponent,
			dialogConfig
		);

		modalDialog.afterClosed().subscribe((result) => {
			this.getAddressList();
		});
		return false;
	}
	deleteAddress(address) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = '138px';
		dialogConfig.width = '477px';
		dialogConfig.panelClass = 'border-radius:10px';
		dialogConfig.data = {
			address,
		};

		const modalDialog = this.dialog.open(
			TrashCanDialogComponent,
			dialogConfig
		);

		modalDialog.afterClosed().subscribe((result) => {
			console.log(result);
			this.getAddressList();
		});
		return false;
	}
	setUtamaAddress(address) {
		this.getAddressList();
	}
}
