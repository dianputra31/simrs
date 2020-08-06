import { Component, ViewChild } from '@angular/core';
import {
	NgbCalendar,
	NgbDate,
	NgbDatepicker,
	NgbDatepickerI18n,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'nest-datepicker-a',
	templateUrl: './nest-datepicker-a.component.html',
	styleUrls: ['./nest-datepicker-a.component.scss'],
})
export class NestDatepickerAComponent {
	hoveredDate: NgbDate | null = null;

	fromDate: NgbDate;
	toDate: NgbDate | null = null;
	@ViewChild(NgbDatepicker, { static: true }) datepicker: NgbDatepicker;

	constructor(calendar: NgbCalendar, public i18n: NgbDatepickerI18n) {
		this.fromDate = calendar.getToday();
		this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
	}

	onDateSelection(date: NgbDate) {
		if (!this.fromDate && !this.toDate) {
			this.fromDate = date;
		} else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
			this.toDate = date;
		} else {
			this.toDate = null;
			this.fromDate = date;
		}
	}

	isHovered(date: NgbDate) {
		return (
			this.fromDate &&
			!this.toDate &&
			this.hoveredDate &&
			date.after(this.fromDate) &&
			date.before(this.hoveredDate)
		);
	}

	isInside(date: NgbDate) {
		console.log();
		if (date.equals(this.fromDate)) {
			return false;
		} else if (date.equals(this.toDate)) {
			return false;
		} else {
			return (
				this.toDate &&
				date.after(this.fromDate) &&
				date.before(this.toDate)
			);
		}
	}

	isRange(date: NgbDate) {
		return (
			date.equals(this.fromDate) ||
			(this.toDate && date.equals(this.toDate))
		);
	}

	navigate(number: number) {
		const { state, calendar } = this.datepicker;
		this.datepicker.navigateTo(
			calendar.getNext(state.firstDate, 'm', number)
		);
	}
}
