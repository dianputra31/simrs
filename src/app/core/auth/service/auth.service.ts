import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RESPONSE } from 'src/app/app.constant';
import { AuthServiceLoginPathConst } from '../../const/auth-service-path.const';
import { StorageService } from '../../storage/service/storage.service';
import { HttpBodyRespModel } from '../http-body-resp/model/http-body-resp.model';
import { CredentialModel } from '../model/request/credential.model';
import { UserModel } from '../model/response/user.model';

@Injectable()
export class AuthService {
	private isAuthenticatedSubject: BehaviorSubject<boolean>;
	constructor(
		private http: HttpClient,
		private storageService: StorageService
	) {
		const token = this.getToken();
		const hasToken = Boolean(token);
		this.isAuthenticatedSubject = new BehaviorSubject<boolean>(hasToken);
	}

	public login(param: CredentialModel): Observable<HttpBodyRespModel> {
		const url = AuthServiceLoginPathConst;
		const model = new HttpBodyRespModel();

		return this.http.post(url, param).pipe(
			map((resp: any): HttpBodyRespModel => model.convert(resp)),
			map(
				(model: HttpBodyRespModel): HttpBodyRespModel => {
					console.log(model);
					if (model.status.rc === RESPONSE.SUCCESS) {
						const account = new UserModel();
						account.convert(model.result);

						if (
							account.accessToken &&
							account.info &&
							account.uac
						) {
							this.storageService.clear();
							this.storageService.stroreAccount(account);
							this.setAuthenticated(true);

							return model;
						} else {
							return model;
						}
					}
				}
			)
		);
	}

	public isAuthenticated(): Observable<boolean> {
		return this.isAuthenticatedSubject.asObservable();
	}

	public setAuthenticated(isAuthenticated: boolean) {
		this.isAuthenticatedSubject.next(isAuthenticated);
	}
	public getToken() {
		return this.storageService.getToken();
	}

	public getEmail() {
		return this.storageService.getEmail();
	}
}
