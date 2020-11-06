import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'rounded-red-button',
	templateUrl: './rounded-red-button.component.html',
	styleUrls: ['./rounded-red-button.component.scss'],
})
export class RoundedRedButtonComponent implements OnInit {
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
