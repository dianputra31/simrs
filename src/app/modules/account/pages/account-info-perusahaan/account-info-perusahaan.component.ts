import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddressList } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { DeliveryAddressObjectModel } from '../../../../shared/components/address-section/model/delivery-address-object.model';
import { DeliveryAddressResponseModel } from '../../../../shared/components/address-section/model/delivery-address-response.model';
import { EditAlamatDialogComponent } from '../../components-info-perusahaan/edit-alamat-dialog/edit-alamat-dialog.component';
import { TambahAlamatBaruDialogComponent } from '../../components-info-perusahaan/tambah-alamat-baru-dialog/tambah-alamat-baru-dialog.component';

@Component({
	selector: 'account-info-perusahaan',
	templateUrl: './account-info-perusahaan.component.html',
	styleUrls: ['./account-info-perusahaan.component.scss'],
})
export class AccountInfoPerusahaanComponent implements OnInit {
	subscribers: Subscription[];
	addresses: DeliveryAddressObjectModel[];
	constructor(
		public dialog: MatDialog,
		private route: ActivatedRoute,
		private router: Router,
		private service: BaseService
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
		const sub = this.service
			.getData(url, DeliveryAddressResponseModel, null, false)
			.subscribe((resp) => {
				this.addresses = resp.delivery_address;
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
}
