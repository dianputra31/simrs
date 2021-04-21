import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
	differenceInCalendarDays,
	endOfMonth,
	format,
	subMonths,
} from 'date-fns';
@Component({
	selector: 'dashboard-datepicker',
	templateUrl: './dashboard-datepicker.component.html',
	styleUrls: ['./dashboard-datepicker.component.scss'],
})
export class DashboardDatepickerComponent implements OnInit {
	@Output() dateSelectedEvent = new EventEmitter<any>();
	@Output() dateRemovedEvent = new EventEmitter<any>();
	startDate = '';
	endDate = '';
	showEndDate;
	date = null;
	dateRange: [Date, Date];
	today = new Date();
	ranges = {
		Today: [new Date(), new Date()],
		'This Month': [new Date(), endOfMonth(new Date())],
	};
	label = ['test', 'test2'];

	range(start: number, end: number): number[] {
		const result: number[] = [];
		for (let i = start; i < end; i++) {
			result.push(i);
		}
		return result;
	}

	disabledDate = (current: Date): boolean => {
		// Can not select days before today and today

		return differenceInCalendarDays(current, this.today) > 0;
	};

	onChange(result): void {
		console.log(result);
		if (result.length === 0) {
			var dateRemoved = {
				startDate: '',
				endDate: '',
			};
			console.log('onChange: ', result[0], result[1]);
			this.dateRemovedEvent.emit(dateRemoved);
		} else {
			this.startDate = format(result[0], 'yyyy-MM-dd');
			this.endDate = format(result[1], 'yyyy-MM-dd');
			console.log('onChange: ', result[0], result[1]);
			var date = {
				startdate: this.startDate,
				enddate: this.endDate == '' ? this.startDate : this.endDate,
			};
			this.dateSelectedEvent.emit(date);
		}
	}

	resetDate() {
		this.date = null;
		this.startDate = '';
		this.endDate = '';
	}

	ngOnInit() {
		var result = subMonths(new Date(), 6);
		var result1 = new Date();
		this.dateRange = [result, result1];
		console.log('range', this.dateRange);
		this.onChange;
	}
}
