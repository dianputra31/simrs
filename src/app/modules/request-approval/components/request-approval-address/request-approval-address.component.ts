import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProfileUrl } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { ProfileResponseModel } from '../../../../shared/components/address-section/model/profile-response.model';


@Component({
	selector: 'request-approval-address',
	templateUrl: './request-approval-address.component.html',
	styleUrls: ['./request-approval-address.component.scss']
})
export class RequestApprovalAddressComponent implements OnInit {
	username;
	address;
	addresses;
	phone;
	province;
	subsribers: Subscription[];

	constructor(private service: BaseService) { }

	ngOnInit(): void {


		const url = ProfileUrl;
		const sub = this.service
			.getData(url, ProfileResponseModel, null, false)
			.subscribe((resp) => {
				this.addresses = resp.delivery_address;

				var def_addr = this.addresses[0].address_name + " - " + this.addresses[0].address_detail
				this.username = this.addresses[0].address_name;
				this.address = this.addresses[0].address_detail + ', ' + this.addresses[0].village + ', ' + this.addresses[0].subdistrict +
					', ' + this.addresses[0].district;
				this.province = this.addresses[0].province;
				this.phone = 'Telp. ' + this.addresses[0].recipient_contact;

			});

		this.subsribers.push(sub);

	}

}
