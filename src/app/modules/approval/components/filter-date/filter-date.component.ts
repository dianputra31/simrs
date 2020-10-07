import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'filter-date',
	templateUrl: './filter-date.component.html',
	styleUrls: ['./filter-date.component.scss'],
})
export class FilterDateComponent implements OnInit {
	@Output() dateSelectedEvent = new EventEmitter<any>();
	startDate = '';
	endDate = '';
	constructor() {}

	ngOnInit(): void {}

	selectedStartDate(date) {
		this.startDate = date.day + '/' + date.month + '/' + date.year;
		date = {
			startdate: this.startDate,
			enddate: this.endDate == '' ? this.startDate : this.endDate,
		};
		this.dateSelectedEvent.emit(date);
	}

	selectedEndDate(date) {
		this.endDate = date.day + '/' + date.month + '/' + date.year;
		date = {
			startdate: this.startDate,
			enddate: this.endDate == '' ? this.startDate : this.endDate,
		};
		this.dateSelectedEvent.emit(date);
	}

	resetDate() {
		this.startDate = '';
		this.endDate = '';
	}
}
