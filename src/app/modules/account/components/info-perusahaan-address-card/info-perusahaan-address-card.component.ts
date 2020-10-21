import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { SaveDefaultAddressUrl } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { DeliveryAddressObjectModel } from '../../../../shared/components/address-section/model/delivery-address-object.model';

@Component({
	selector: 'info-perusahaan-address-card',
	templateUrl: './info-perusahaan-address-card.component.html',
	styleUrls: ['./info-perusahaan-address-card.component.scss'],
})
export class InfoPerusahaanAddressCardComponent implements OnInit {
	@Input() utama: Boolean;
	@Input() index: number;
	@Input() address: DeliveryAddressObjectModel;
	@Output() setUtamaEvent = new EventEmitter();
	@Output() deleteEvent = new EventEmitter();
	@Output() editEvent = new EventEmitter();
	@BlockUI() blockUI: NgBlockUI;
	constructor(private http: HttpService) {}

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

	deleteInfo() {
		this.deleteEvent.emit();
	}

	setUtama(e) {
		this.blockUI.start();
		var url = SaveDefaultAddressUrl + `${e}`;
		var param = {};
		console.log('idnya', url);
		this.http.post(url, param).subscribe((resp) => {
			this.blockUI.stop();
			if (resp.status.msg === 'Success') {
				this.setUtamaEvent.emit();
			} else {
				console.log('tidak masuk');
			}
		});
	}
}
