import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'rounded-input',
	templateUrl: './rounded-input.component.html',
	styleUrls: ['./rounded-input.component.scss'],
})
export class RoundedInputComponent implements OnInit {
	@Input() width: String;
	@Input() placeholderText: String;
	constructor() {}

	ngOnInit(): void {}
}
