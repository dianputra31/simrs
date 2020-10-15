import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'label-input',
	templateUrl: './label-input.component.html',
	styleUrls: ['./label-input.component.scss'],
})
export class LabelInputComponent implements OnInit {
	@Input() label: String;
	@Input() harusDiisi: Boolean;
	constructor() {}

	ngOnInit(): void {}
}
