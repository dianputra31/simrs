import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'kirim-ulang-button',
	templateUrl: './kirim-ulang-button.component.html',
	styleUrls: ['./kirim-ulang-button.component.scss'],
})
export class KirimUlangButtonComponent implements OnInit {
	@Input() isCountingDown: Boolean = false;
	@Output() requestOtpEvent = new EventEmitter();
	constructor() {}

	ngOnInit(): void {}

	buttonClick() {
		console.log('tkjhad');
		this.requestOtpEvent.emit();
	}
}
