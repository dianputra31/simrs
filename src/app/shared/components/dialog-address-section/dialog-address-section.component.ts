import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Subscription } from 'rxjs';
import { AddressList } from '../../../app.constant';
import { BaseService } from '../../../core/base-service/service/base.service';
import { DeliveryAddressObjectModel } from '../address-section/model/delivery-address-object.model';
import { DeliveryAddressResponseModel } from '../address-section/model/delivery-address-response.model';

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
		@Inject(MAT_DIALOG_DATA) public data: any,
		private service: BaseService
	) {
		// this.datalocation = data.address;
		// console.log(data.address);
	}

	ngOnInit(): void {
		this.getAddressList();
	}


	getAddressList() {
		const url = AddressList;
		const sub = this.service
			.getData(url, DeliveryAddressResponseModel, null, false)
			.subscribe((resp) => {
				this.addresses = resp.delivery_address;

				this.location = this.addresses[0].address_detail;
			});

		this.subsribers.push(sub);
	}

}
