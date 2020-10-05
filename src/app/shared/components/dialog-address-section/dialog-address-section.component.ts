import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddressList, ProfileUrl, SaveDefaultAddressUrl, SetDefaultAddress } from '../../../app.constant';
import { BaseService } from '../../../core/base-service/service/base.service';
import { CartItemResponseModel } from '../../../models/cart-item-response.model';
import { SetDefaultAddressReq } from '../../../models/default-address-request.model';
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
	account;
	picked;

	form = new FormGroup({
		gender: new FormControl('', Validators.required)
	});

	changeDefault(e, a) {
		console.log(e.target.value);
		console.log(a);

		const url = SaveDefaultAddressUrl + a;

		console.log(url);
		this.account = JSON.parse(localStorage.getItem('account'));

		const accessToken = this.account.accessToken;

		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + this.account.accessToken,
		});


		this.http.post<any>(url, { headers: headers }).subscribe(data => {
			console.log(data);
			this.getAddressList();
			// this.dialog.close();
		})

	}

	constructor(
		public dialogRef: MatDialogRef<DialogAddressSectionComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private service: BaseService,
		private http: HttpClient,
		private router: Router,
	) {
		// this.datalocation = data.address;
		// console.log(data.address);
	}

	ngOnInit(): void {
		const pro = ProfileUrl;

		this.account = JSON.parse(localStorage.getItem('account'));

		const accessToken = this.account.accessToken;

		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + accessToken,
		});


		this.http.get(pro, { headers: headers }).subscribe(
			(resp) => {
				this.picked = resp.data.profile;
			}
		)
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


		const sub = this.service
			.getData(url, DeliveryAddressResponseModel, null, false)
			.subscribe((resp) => {
				this.addresses = resp.delivery_address;

				this.location = this.addresses[0].address_detail;
			});

		// this.subsribers.push(sub);
	}

	setDefaultAddress(addressId) {
		console.log("radio button is check id", addressId)
		console.log("address-list: ", this.addresses)
		var adid = <string>addressId.id
		const url = SetDefaultAddress + adid

		console.log("adid: ", adid)
		console.log("url: ", url)

		var dd = new SetDefaultAddressReq()
		dd.address_id = adid
		const sub = this.service
			.postData(url, dd, CartItemResponseModel, false)
			.subscribe((resp) => {
				console.log("resp: ", resp)
				this.dialogRef.close();
			})
		this.subsribers.push(sub);
	}
}
