import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'filter-input',
	templateUrl: './filter-input.component.html',
	styleUrls: ['./filter-input.component.scss'],
})
export class FilterInputComponent implements OnInit {
	@Input() hint: String;
	@Input() logo: String;
	@Input() disabled: Boolean;
	@Output() keyword = new EventEmitter<string>();
	a;
	constructor() {}

	ngOnInit(): void {}

	getKeyword(thisval) {
		this.a = thisval;
		this.keyword.emit(thisval);
	}

	resetKeyword() {
		this.a = '';
	}
}
