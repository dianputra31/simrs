import { Injectable } from '@angular/core';
import { UserModel } from '../../auth/model/response/user.model';

@Injectable()
export class StorageService {
	constructor() {}

	public clear() {
		localStorage.clear();
	}

	/* Account Storage */
	public stroreAccount(account: UserModel) {
		localStorage.setItem('account', JSON.stringify(account));
	}

	public getAccount(): UserModel {
		return JSON.parse(localStorage.getItem('account'));
	}

	public getToken() {
		const account = this.getAccount();

		return account ? account.accessToken : null;
	}

	public getName() {
		const account = this.getAccount();

		return account ? account.info.username : null;
	}

	public getRole() {
		const account = this.getAccount();

		return account ? account.info.roleName : null;
	}

	public getEmail() {
		const account = this.getAccount();

		return account ? account.info.email : null;
	}
	/* Account Storage  */
}
