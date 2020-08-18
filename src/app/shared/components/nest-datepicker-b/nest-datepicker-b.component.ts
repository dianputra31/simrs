import {
	Component,
	EventEmitter,
	OnInit,
	Output,
	ViewChild,
} from '@angular/core';
import {
	NgbDate,
	NgbDatepicker,
	NgbDatepickerI18n,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'nest-datepicker-b',
	templateUrl: './nest-datepicker-b.component.html',
	styleUrls: ['./nest-datepicker-b.component.scss'],
})
export class NestDatepickerBComponent implements OnInit {
	@Output() dateSelectedEvent = new EventEmitter<NgbDate>();
	@ViewChild(NgbDatepicker, { static: true })
	datepicker: NgbDatepicker;

	selectedDate: NgbDate;
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

	isRange(date: NgbDate) {
		return date.equals(this.selectedDate);
	}

	onDateSelection(date: NgbDate) {
		this.selectedDate = date;
		this.dateSelectedEvent.emit(date);
	}
	ngOnInit() {}
}
