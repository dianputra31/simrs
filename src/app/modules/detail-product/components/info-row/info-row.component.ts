import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'info-row',
	templateUrl: './info-row.component.html',
	styleUrls: ['./info-row.component.scss'],
})
export class InfoRowComponent implements OnInit {
	@Input() title: string;
	constructor() {}

	ngOnInit(): void {}
}
