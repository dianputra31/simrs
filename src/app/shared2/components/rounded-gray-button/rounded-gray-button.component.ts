import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'rounded-gray-button',
	templateUrl: './rounded-gray-button.component.html',
	styleUrls: ['./rounded-gray-button.component.scss'],
})
export class RoundedGrayButtonComponent implements OnInit {
	@Input() label: String = 'test';
	@Input() font: String = '15px';
	@Input() paddingtop: String = '0px';
	@Input() paddingbottom: String = '0px';
	@Input() paddingleft: String = '0px';
	@Input() paddingright: String = '0px';
	@Input() matchParentWidth: Boolean = false;

	constructor() {}

	ngOnInit(): void {}

	shouldMatchParentWidth() {
		if (this.matchParentWidth) {
			return 'flex';
		} else {
			return 'inline-block';
		}
	}
}
