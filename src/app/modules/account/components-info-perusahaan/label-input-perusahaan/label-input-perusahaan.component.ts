import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'label-input-perusahaan',
	templateUrl: './label-input-perusahaan.component.html',
	styleUrls: ['./label-input-perusahaan.component.scss'],
})
export class LabelInputPerusahaanComponent implements OnInit {
	@Input() label: String;
	@Input() harusDiisi: Boolean;
	constructor() {}

	ngOnInit(): void {}
}
