import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'name-address',
	templateUrl: './name-address.component.html',
	styleUrls: ['./name-address.component.scss'],
})
export class NameAddressComponent implements OnInit {
	@Input() title: String;
	@Input() content: String;
	constructor() {}

	ngOnInit(): void {}
}
