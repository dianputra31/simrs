import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'filter-date',
	templateUrl: './filter-date.component.html',
	styleUrls: ['./filter-date.component.scss'],
})
export class FilterDateComponent implements OnInit {
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
