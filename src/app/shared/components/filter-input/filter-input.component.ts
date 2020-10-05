import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'filter-input',
	templateUrl: './filter-input.component.html',
	styleUrls: ['./filter-input.component.scss'],
})
export class FilterInputComponent implements OnInit {
	@Input() hint: String;
	@Input() logo: String;
	@Input() disabled: Boolean;
	constructor() { }

	ngOnInit(): void { }
}
