import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'filter-dropdown-list',
	templateUrl: './filter-dropdown-list.component.html',
	styleUrls: ['./filter-dropdown-list.component.scss'],
})
export class FilterDropdownListComponent implements OnInit {
	purchasers = [
		'Purchase 01',
		'Purchase 02',
		'Purchase 03',
		'Purchase 04',
		'Purchase 05',
		'Purchase 06',
		'Purchase 07',
		'Purchase 08',
		'Purchase 09',
		'Purchase 10',
		'Purchase 11',
		'Purchase 12',
	];
	selected = this.purchasers[0];
	constructor() {}

	ngOnInit(): void {}
}
