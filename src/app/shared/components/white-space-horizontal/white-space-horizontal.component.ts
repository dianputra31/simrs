import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'wsh',
	templateUrl: './white-space-horizontal.component.html',
	styleUrls: ['./white-space-horizontal.component.scss'],
})
export class WhiteSpaceHorizontalComponent implements OnInit {
	@Input() wide: number;
	constructor() {}
	stylesObj = {};

	ngOnInit(): void {
		this.stylesObj = { width: this.wide };
	}
}
