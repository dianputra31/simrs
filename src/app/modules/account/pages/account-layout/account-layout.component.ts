import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
	selector: 'account-layout',
	templateUrl: './account-layout.component.html',
	styleUrls: ['./account-layout.component.scss']
})
export class AccountLayoutComponent implements OnInit {
	datacompany;
	datauser;
	account;

	constructor() { }

	subsribers: Subscription[];

	ngOnInit(): void {
		this.subsribers = [];
		this.datacompany = JSON.parse(localStorage.getItem('company'));
		this.datauser = JSON.parse(localStorage.getItem('profile'));
		this.account = JSON.parse(localStorage.getItem('account'));
	}



}
