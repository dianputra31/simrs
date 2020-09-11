import { Injectable } from '@angular/core';
import { UserModel } from '../../auth/model/response/user.model';

@Injectable()
export class StorageService {
	constructor() { }

	public clear() {
		localStorage.clear();
	}

	email: any;
	role_name: any;
	fullname: any;

	/* Account Storage */
	public storeAccount(account: UserModel, info: any) {
		if (info === 'token') {
			localStorage.setItem('account', JSON.stringify(account));
		} else {
			localStorage.setItem('profile', JSON.stringify(account));
		}


	}

	public getAccount(): UserModel {
		return JSON.parse(localStorage.getItem('account'));
	}

	public getAccountProfile(): UserModel {
		return JSON.parse(localStorage.getItem('profile'))
	}

	public getToken() {
		const account = this.getAccount();

		return account ? account.accessToken : null;
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
