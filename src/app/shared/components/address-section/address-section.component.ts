import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProfileUrl } from '../../../app.constant';
import { HttpService } from '../../../core/base-service/http.service';
import { DialogAddressSectionComponent } from '../dialog-address-section/dialog-address-section.component';
import { DeliveryAddressObjectModel } from './model/delivery-address-object.model';
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

	subsribers: Subscription[] = [];

	hlmn_ini;
	divnya;
	location;

	addresses: DeliveryAddressObjectModel[];

	constructor(
		public dialog: MatDialog,
		private router: Router,
		private service: HttpService
	) {}

	stylesObj = {};

	ngOnInit(): void {
		this.stylesObj = {
			width: this.wide,
			margin: this.margin,
			paddingLeft: this.pl,
			borderRadius: this.borderRadius,
		};

		this.getAddress();
	}

	openDialogLocation() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = 'auto';
		dialogConfig.width = '680px';
		dialogConfig.panelClass = 'border-radius:30px';
		dialogConfig.data = {
			searchId: 'hello',
			address: this.addresses,
		};
		const modalDialog = this.dialog.open(
			DialogAddressSectionComponent,
			dialogConfig
		);

		modalDialog.afterClosed().subscribe((result) => {
			this.getAddress();
		});
	}

	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe);
	}

	getAddress() {
		const url = ProfileUrl;
		const sub = this.service.get(url).subscribe((resp) => {
			this.addresses = resp.data.delivery_address;

			var def_addr =
				this.addresses[0].address_name +
				' - ' +
				this.addresses[0].address_detail;
			this.location = def_addr;
		});

		this.subsribers.push(sub);
	}
}
