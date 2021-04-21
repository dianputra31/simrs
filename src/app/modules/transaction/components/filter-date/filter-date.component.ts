import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

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

	dateObj = {
		type: 'startDate',
		date: '',
	};

	ngOnInit(): void {}

	selectedStartDate(date) {
		this.startDate = this.formatDate(date);
		date = {
			startdate: this.startDate,
			enddate: this.endDate == '' ? this.startDate : this.endDate,
		};
		this.dateSelectedEvent.emit(date);
	}

	selectedEndDate(date) {
		this.endDate = this.formatDate(date);
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

	formatDate(date: NgbDate): string {
		return (
			date.year +
			'-' +
			('0' + date.month).slice(-2) +
			'-' +
			('0' + date.day).slice(-2) +
			' 00:00:00'
		);
	}
}
