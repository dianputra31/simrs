import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'account-info-personal',
	templateUrl: './account-info-personal.component.html',
	styleUrls: ['./account-info-personal.component.scss'],
})
export class AccountInfoPersonalComponent implements OnInit {
	isEditting;
	constructor() {}

	ngOnInit(): void {
		this.isEditting = false;
	}

	save() {
		this.isEditting = false;
	}

	edit() {
		this.isEditting = true;
	}
}
