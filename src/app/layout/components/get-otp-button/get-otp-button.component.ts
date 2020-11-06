import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'get-otp-button',
	templateUrl: './get-otp-button.component.html',
	styleUrls: ['./get-otp-button.component.scss'],
})
export class GetOtpButtonComponent implements OnInit {
	@Input() valid: Boolean = false;
	@Output() getOtpEvent = new EventEmitter();
	constructor() {}

	ngOnInit(): void {}

	buttonClick() {
		this.getOtpEvent.emit();
	}
}
