import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'request-approval-address',
	templateUrl: './request-approval-address.component.html',
	styleUrls: ['./request-approval-address.component.scss']
})
export class RequestApprovalAddressComponent implements OnInit {
	username;
	company;
	address;

	constructor() { }

	ngOnInit(): void {
		this.username = 'Firman Taher';
		this.company = 'PT Narindo Solusi Telekomunikasi';
		this.address = 'Jalan Merpati I no. 23, Kemang Jakarta Selatan, 12320 - DKI Jakarta Telp. 0812 3456 7890';
	}

}
