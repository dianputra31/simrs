import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BaseService } from '../../../../core/base-service/service/base.service';

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
	email;


	constructor(
		private service: BaseService,
	) { }

	subsribers: Subscription[];

	ngOnInit(): void {
		this.subsribers = [];

		var datausr = JSON.parse(localStorage.getItem('profile'));
		this.email = datausr.email;
		var splitted = datausr.fullname.split(" ", 2);
		this.firstName = splitted[0];
		this.lastName = splitted[1];

		this.isEditting = false;
	}

	save() {
		this.isEditting = false;



	}

	edit() {
		this.isEditting = true;
	}
}
