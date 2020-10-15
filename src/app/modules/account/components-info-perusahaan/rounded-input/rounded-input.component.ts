import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'rounded-input',
	templateUrl: './rounded-input.component.html',
	styleUrls: ['./rounded-input.component.scss'],
})
export class RoundedInputComponent implements OnInit {
	@Input() width: String;
	@Input() placeholderText: String;
	@Output() onUserInput = new EventEmitter<string>();
	@Input() disable: boolean = false;
	@Input() content: string;
	constructor() {}

	ngOnInit(): void {}

	onKey(key) {
		this.onUserInput.emit(this.content);
	}
}
