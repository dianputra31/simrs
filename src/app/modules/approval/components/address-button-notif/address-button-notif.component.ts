import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'address-button-notif',
	templateUrl: './address-button-notif.component.html',
	styleUrls: ['./address-button-notif.component.scss']
})
export class AddressButtonNotifComponent implements OnInit {
	qty = 111;
	listApprovals = [
		{
			name: 'Kantor Pusat',
			qty: 10,
		},
		{
			name: 'Kantor Cabang 1',
			qty: 8,
		},
		{
			name: 'Kantor Cabang 2',
			qty: 0,
		},
		{
			name: 'Kantor Cabang 3',
			qty: 0,
		},
		{
			name: 'Kantor Cabang 4',
			qty: 6,
		},
		{
			name: 'Kantor Cabang 5',
			qty: 9,
		},
		{
			name: 'Kantor Cabang 6',
			qty: 0,
		},
	];

	selected = this.listApprovals[0];


	constructor() { }

	ngOnInit(): void {
	}


}
