import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddressList } from '../../../app.constant';
import { BaseService } from '../../../core/base-service/service/base.service';
import { DeliveryAddressResponseModel } from '../address-section/model/delivery-address-response.model';

@Component({
	selector: 'filter-delivery-address',
	templateUrl: './filter-delivery-address.component.html',
	styleUrls: ['./filter-delivery-address.component.scss']
})
export class FilterDeliveryAddressComponent implements OnInit {

	addresses = []
	selected;
	subsribers: Subscription[];
	@Output() address_id = new EventEmitter<number>();

	constructor(
		private router: Router,
		private service: BaseService
	) { }

	ngOnInit(): void {
		this.subsribers = []
		this.address_list()
	}

	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe);
	}

	address_list() {
		const sub = this.service
			.getData(AddressList, DeliveryAddressResponseModel, null, false)
			.subscribe((resp) => {
				console.log("response get-address: ", resp)
				this.addresses = resp.delivery_address;
				this.selected = this.addresses[0];
			});

		this.subsribers.push(sub);
	}

	selectedAddress(address) {
		this.address_id.emit(address.id);
	}

}
