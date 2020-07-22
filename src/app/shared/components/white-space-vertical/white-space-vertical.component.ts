import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'wsv',
	templateUrl: './white-space-vertical.component.html',
	styleUrls: ['./white-space-vertical.component.scss'],
})
export class WhiteSpaceVerticalComponent implements OnInit {
	@Input() wide: number;
	constructor() { }
	stylesObj = {};

	ngOnInit(): void {
		this.stylesObj = { height: this.wide };
	}
}
