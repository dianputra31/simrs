import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class StorageService {
	constructor(private router: Router) {}

	tokenPrefix = 'token';
	approvalDialogStatusPrefix = 'approvalDialogStatus';
	public clear() {
		localStorage.clear();
	}

	public storeToken(token: any) {
		localStorage.setItem(this.tokenPrefix, JSON.stringify(token));
	}

	public getToken() {
		return JSON.parse(localStorage.getItem(this.tokenPrefix));
	}

	public storeApprovalDialogStatus(status: any) {
		localStorage.setItem(
			this.approvalDialogStatusPrefix,
			JSON.stringify(status)
		);
	}

	public getApprovalDialogStatus() {
		return JSON.parse(
			localStorage.getItem(this.approvalDialogStatusPrefix)
		);
	}
	email: any;
	role_name: any;
	fullname: any;

	/* Account Storage */
	public storeAccount(account: any, info: any) {
		if (info === 'token') {
			localStorage.setItem('account', JSON.stringify(account));
		} else {
			localStorage.setItem('profile', JSON.stringify(account));
		}
	}

	public getAccount(): any {
		return JSON.parse(localStorage.getItem('account'));
	}

	public getCompany() {
		console.log('test');
		console.log(JSON.parse(localStorage.getItem('company')));
		return JSON.parse(localStorage.getItem('company'));
	}

	public getAccountProfile(): any {
		return JSON.parse(localStorage.getItem('profile'));
	}

	public getName() {
		const account = this.getAccountProfile();

		return account ? account.fullname : null;
	}

	public getRole() {
		const account = this.getAccountProfile();

		return account ? account.role_name : null;
	}

	public getEmail() {
		const account = this.getAccountProfile();

		return account ? account.email : null;
	}
	/* Account Storage  */
}
