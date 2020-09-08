import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'button-gray',
	templateUrl: './button-gray.component.html',
	styleUrls: ['./button-gray.component.scss'],
})
export class ButtonGrayComponent implements OnInit {
	@Input() label: String;
	constructor() {}

	ngOnInit(): void {}
}
