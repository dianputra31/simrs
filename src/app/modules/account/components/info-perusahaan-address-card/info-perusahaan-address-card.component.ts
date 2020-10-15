import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DeliveryAddressObjectModel } from '../../../../shared/components/address-section/model/delivery-address-object.model';

@Component({
	selector: 'info-perusahaan-address-card',
	templateUrl: './info-perusahaan-address-card.component.html',
	styleUrls: ['./info-perusahaan-address-card.component.scss'],
})
export class InfoPerusahaanAddressCardComponent implements OnInit {
	@Input() utama: Boolean;
	@Input() address: DeliveryAddressObjectModel;
	@Output() editEvent = new EventEmitter();
	constructor() {}

	ngOnInit(): void {}

	getAddress() {
		const detail =
			this.address?.address_detail +
			', ' +
			this.address?.village +
			', ' +
			this.address?.subdistrict +
			', ' +
			this.address?.district +
			', ' +
			this.address?.province +
			', ' +
			this.address?.recipient_contact;
		return detail;
	}

	edit() {
		this.editEvent.emit();
	}
}
