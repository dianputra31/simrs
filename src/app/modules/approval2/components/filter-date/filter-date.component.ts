import {
	Component,
	EventEmitter,
	OnInit,
	Output,
	ViewChild,
} from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'filter-date',
	templateUrl: './filter-date.component.html',
	styleUrls: ['./filter-date.component.scss'],
})
export class FilterDateComponent implements OnInit {
	@ViewChild('myDrop', { static: true }) myDrop: NgbDropdown;
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
		this.myDrop.close();
	}

	resetDate() {
		this.startDate = '';
		this.endDate = '';
	}
}
