import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'item-summary-dropdown',
	templateUrl: './item-summary-dropdown.component.html',
	styleUrls: ['./item-summary-dropdown.component.scss'],
})
export class ItemSummaryDropdownComponent implements OnInit {
	@ViewChild('scrollMe') private myScrollContainer: ElementRef;

	open = false;
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
		{
			name: 'Kantor Cabang 7',
			qty: 2,
		},
		{
			name: 'Kantor Cabang 8',
			qty: 2,
		},
		{
			name: 'Kantor Cabang 9',
			qty: 2,
		},
		{
			name: 'Kantor Cabang 10',
			qty: 2,
		},
	];

	selected = this.waitingApprovals[0];
	selectedIndex = 0;
	constructor() {}

	ngOnInit(): void {}

	checkDropDown(open: boolean) {
		this.open = open;
		if (open) {
			var topPos = document.getElementsByClassName('item-row');
			this.myScrollContainer.nativeElement.scrollTop =
				topPos[this.selectedIndex].offsetTop - 20;
		} else {
		}
	}

	clickWaiting(selected, index) {
		this.selected = selected;
		this.selectedIndex = index;
	}
}
