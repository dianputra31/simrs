import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
	selector: 'account-info-personal',
	templateUrl: './account-info-personal.component.html',
	styleUrls: ['./account-info-personal.component.scss'],
})
export class AccountInfoPersonalComponent implements OnInit {
	datausr;
	isEditting;
	firstName;
	lastName;

	param =
		{
			email: "",
			first_name: "",
			last_name: "",
			gender: "",
			role_id: "",
			company_id: "",
			profile_picture_url: ""
		}

	constructor() { }

	subsribers: Subscription[];

	ngOnInit(): void {
		this.subsribers = [];
		var datausr = JSON.parse(localStorage.getItem('profile'));
		var splitted = datausr.fullname.split(" ", 2);
		this.firstName = splitted[0];
		this.lastName = splitted[1];

		this.param.email = datausr.email;
		this.isEditting = false;

	}

	save(a, b) {
		this.isEditting = false;
		console.log(a + ' ' + b);
	}

	edit() {
		this.isEditting = true;
	}
}
