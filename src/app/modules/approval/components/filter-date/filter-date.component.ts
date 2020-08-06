import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'filter-date',
	templateUrl: './filter-date.component.html',
	styleUrls: ['./filter-date.component.scss'],
})
export class FilterDateComponent implements OnInit {
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
