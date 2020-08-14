import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbDatepicker, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'nest-datepicker-b',
	templateUrl: './nest-datepicker-b.component.html',
	styleUrls: ['./nest-datepicker-b.component.scss'],
})
export class NestDatepickerBComponent implements OnInit {
	@ViewChild(NgbDatepicker, { static: true }) datepicker: NgbDatepicker;

	constructor(public i18n: NgbDatepickerI18n) {}

	navigate(number: number) {
		const { state, calendar } = this.datepicker;
		this.datepicker.navigateTo(
			calendar.getNext(state.firstDate, 'm', number)
		);
	}

	today() {
		const { calendar } = this.datepicker;
		this.datepicker.navigateTo(calendar.getToday());
	}

	ngOnInit() {}
}
