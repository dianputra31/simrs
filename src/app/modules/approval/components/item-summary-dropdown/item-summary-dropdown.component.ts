import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'item-summary-dropdown',
	templateUrl: './item-summary-dropdown.component.html',
	styleUrls: ['./item-summary-dropdown.component.scss'],
})
export class ItemSummaryDropdownComponent implements OnInit {
	qty = 111;
	waitingApprovals = [
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
			qty: 21,
		},
		{
			name: 'Kantor Cabang 3',
			qty: 12,
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
			qty: 2,
		},
	];

	selected = this.waitingApprovals[0];
	constructor() {}

	ngOnInit(): void {}
}
