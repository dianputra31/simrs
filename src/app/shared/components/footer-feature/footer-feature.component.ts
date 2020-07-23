import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'footer-feature',
	templateUrl: './footer-feature.component.html',
	styleUrls: ['./footer-feature.component.scss'],
})
export class FooterFeatureComponent implements OnInit {
	@Input() image: String;
	@Input() titleOne: String;
	@Input() titleTwo: String;

	constructor() {}

	ngOnInit() {}
}
