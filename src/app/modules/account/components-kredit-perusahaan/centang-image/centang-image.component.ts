import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'centang-image',
	templateUrl: './centang-image.component.html',
	styleUrls: ['./centang-image.component.scss'],
})
export class CentangImageComponent implements OnInit {
	@Input() image: String;
	@Input() color: String;
	constructor() {}

	ngOnInit(): void {}
}
