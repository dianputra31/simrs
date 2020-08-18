import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'filter-dropdown',
	templateUrl: './filter-dropdown.component.html',
	styleUrls: ['./filter-dropdown.component.scss'],
})
export class FilterDropdownComponent implements OnInit {
	open = false;
	selected;
	purchasers = [
		'Semua',
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

	constructor() {}

	ngOnInit(): void {
		this.resetSelected();
	}

	checkDropDown(open: boolean) {
		this.open = open;
	}

	resetSelected() {
		this.selected = this.purchasers[0];
	}
}
