import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'check-box-round',
	templateUrl: './check-box-round.component.html',
	styleUrls: ['./check-box-round.component.scss'],
})
export class CheckBoxRoundComponent implements OnInit {
	@Input() checked: boolean = true;

	clicked() {
		this.checked = !this.checked;
	}
	constructor() {}

	ngOnInit(): void {}
}
