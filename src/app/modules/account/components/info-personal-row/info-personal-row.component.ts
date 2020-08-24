import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'info-personal-row',
	templateUrl: './info-personal-row.component.html',
	styleUrls: ['./info-personal-row.component.scss'],
})
export class InfoPersonalRowComponent implements OnInit {
	@Input() label: String;
	@Input() content: String;
	@Input() isEditting: Boolean;
	constructor() {}

	ngOnInit(): void {}
}
