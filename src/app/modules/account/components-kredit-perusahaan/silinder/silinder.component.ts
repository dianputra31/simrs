import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'silinder',
	templateUrl: './silinder.component.html',
	styleUrls: ['./silinder.component.scss'],
})
export class SilinderComponent implements OnInit {
	@Input() label: String;
	@Input() content: String;
	@Input() image: String;
	@Input() color: String;

	constructor() {}

	ngOnInit(): void {}
}
