import { Component, Inject, OnInit } from '@angular/core';
import {
	MatDialog,
	MatDialogConfig,
	MatDialogRef,
	MAT_DIALOG_DATA,
} from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddressList, SetDefaultAddress } from '../../../app.constant';
import { HttpService } from '../../../core/base-service/http.service';
import { SetDefaultAddressReq } from '../../../models/default-address-request.model';
import { DeliveryAddressObjectModel } from '../address-section/model/delivery-address-object.model';
import { TambahAlamatBaruDialogComponent } from '../tambah-alamat-baru-dialog/tambah-alamat-baru-dialog.component';

@Component({
	selector: 'dialog-address-section',
	templateUrl: './dialog-address-section.component.html',
	styleUrls: ['./dialog-address-section.component.scss'],
})
export class DialogAddressSectionComponent implements OnInit {
	datalocation: DeliveryAddressObjectModel[];
	subsribers: Subscription[];
	addresses: DeliveryAddressObjectModel[];
	location;

	constructor(
		public dialogRef: MatDialogRef<DialogAddressSectionComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private router: Router,
		private service: HttpService,
		public dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.subsribers = [];
		this.getAddressList();
	}

	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe);
	}

	goToAkun() {
		this.router.navigate(['./account/info-perusahaan']);
		this.dialogRef.close();
	}

	getAddressList() {
		const url = AddressList;
		const sub = this.service.get(url).subscribe((resp) => {
			this.addresses = resp.data;

			this.location = this.addresses[0].address_detail;
		});

		this.subsribers.push(sub);
	}

	setDefaultAddress(addressId) {
		var adid = <string>addressId.id;
		const url = SetDefaultAddress + adid;
		var dd = new SetDefaultAddressReq();
		dd.address_id = adid;
		const sub = this.service.post(url, dd).subscribe((resp) => {
			this.dialogRef.close();
		});
		this.subsribers.push(sub);
	}

	checkedItem(index) {
		if (index == 0) {
			return 'checked';
		} else {
			return '';
		}
	}

	tambahAlamat() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component-2';
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
}
