import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'red-border-white-bg-button',
	templateUrl: './red-border-white-bg-button.component.html',
	styleUrls: ['./red-border-white-bg-button.component.scss'],
})
export class RedBorderWhiteBgButtonComponent implements OnInit {
	@Input() label: String = 'test';
	constructor() {}

	ngOnInit(): void {}
}
