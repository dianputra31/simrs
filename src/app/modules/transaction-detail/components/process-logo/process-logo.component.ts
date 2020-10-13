import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'process-logo',
	templateUrl: './process-logo.component.html',
	styleUrls: ['./process-logo.component.scss'],
})
export class ProcessLogoComponent implements OnInit {
	@Input() image: string;
	@Input() date: string;
	constructor() {}

	ngOnInit(): void {}
}
