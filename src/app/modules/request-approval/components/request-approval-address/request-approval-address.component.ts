import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
	selector: 'request-approval-address',
	templateUrl: './request-approval-address.component.html',
	styleUrls: ['./request-approval-address.component.scss'],
})
export class RequestApprovalAddressComponent implements OnInit {
	@Input() fullname;
	@Input() addressData;
	addressName;
	address;
	phone;
	province;
	subsribers: Subscription[];

	constructor() {}

	ngOnInit(): void {
		if (this.addressData) {
			this.province = this.addressData[0].province;
			this.phone = 'Telp. ' + this.addressData[0].recipient_contact;
		}
	}

	getAddressName() {
		return this.addressData ? this.addressData[0].address_name : '';
	}

	getAddress() {
		return this.addressData
			? this.addressData[0].address_detail +
					', ' +
					this.addressData[0].village +
					', ' +
					this.addressData[0].subdistrict +
					', ' +
					this.addressData[0].district +
					', ' +
					this.addressData[0].zipcode
			: '';
	}

	getProvince() {
		return this.addressData ? this.addressData[0].province : '';
	}

	getPhone() {
		return this.addressData
			? 'Telp. ' + this.addressData[0].recipient_contact
			: '';
	}
}
