import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProfileUrl } from '../../../app.constant';
import { BaseService } from '../../../core/base-service/service/base.service';
import { DialogAddressSectionComponent } from '../dialog-address-section/dialog-address-section.component';
import { DeliveryAddressObjectModel } from './model/delivery-address-object.model';
import { ProfileResponseModel } from './model/profile-response.model';
@Component({
	selector: 'address-section',
	templateUrl: './address-section.component.html',
	styleUrls: ['./address-section.component.scss'],
})
export class AddressSectionComponent implements OnInit {
	@Input() wide: number;
	@Input() margin: number;
	@Input() pl: number;
	@Input() borderRadius: number;

	subsribers: Subscription[];

	hlmn_ini;
	divnya;
	location;

	addresses: DeliveryAddressObjectModel[];

	constructor(
		public dialog: MatDialog,
		private router: Router,
		private service: BaseService
	) { }

	stylesObj = {};

	openDialogLocation() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = 'auto';
		dialogConfig.width = '680px';
		dialogConfig.panelClass = 'border-radius:20px';
		dialogConfig.data = {
			searchId: 'hello',
			address: this.addresses,
		};
		const modalDialog = this.dialog.open(
			DialogAddressSectionComponent,
			dialogConfig
		);

		modalDialog.afterClosed().subscribe(result => {
			this.getAddress();
		})
	}

	ngOnInit(): void {
		// if (this.router.url == '/pilih-produk') {
		// 	this.divnya = 'location-user-pendek';
		// } else {
		// 	this.divnya = 'location-user-panjang';
		// }
		this.subsribers = [];
		this.divnya = 'location-user';

		this.stylesObj = {
			width: this.wide,
			margin: this.margin,
			paddingLeft: this.pl,
			borderRadius: this.borderRadius,
		};

		this.getAddress();
	}

	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe);
	}

	getAddress() {
		const url = ProfileUrl;
		const sub = this.service
			.getData(url, ProfileResponseModel, null, false)
			.subscribe((resp) => {
				this.addresses = resp.delivery_address;

				var def_addr = this.addresses[0].address_name + " - " + this.addresses[0].address_detail
				this.location = def_addr;
			});

		this.subsribers.push(sub);
	}
}
