import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'date-dropdown',
	templateUrl: './date-dropdown.component.html',
	styleUrls: ['./date-dropdown.component.scss'],
})
export class DateDropdownComponent implements OnInit {
	startDate = '';
	endDate = '';
	constructor() {}

	ngOnInit(): void {}

	selectedStartDate(date) {
		this.startDate = date.day + '/' + date.month + '/' + date.year;
	}

	selectedEndDate(date) {
		this.endDate = date.day + '/' + date.month + '/' + date.year;
	}

	resetDate() {
		this.startDate = '';
		this.endDate = '';
	}
}
