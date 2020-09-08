import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RESPONSE } from 'src/app/app.constant';
import { BaseService } from '../../base-service/service/base.service';
import { AuthServiceLoginPathConst, AuthServiceProfilePathConst } from '../../const/auth-service-path.const';
import { StorageService } from '../../storage/service/storage.service';
import { HttpBodyRespModel } from '../http-body-resp/model/http-body-resp.model';
import { CredentialModel } from '../model/request/credential.model';
import { UserModel } from '../model/response/user.model';


@Injectable()
export class AuthService {
	profiledata;
	private isAuthenticatedSubject: BehaviorSubject<boolean>;
	constructor(
		private http: HttpClient,
		private storageService: StorageService,
		private services: BaseService,
	) {
		const token = this.getToken();
		const hasToken = Boolean(token);
		this.isAuthenticatedSubject = new BehaviorSubject<boolean>(hasToken);
	}

	public login(param: CredentialModel): Observable<HttpBodyRespModel> {
		const url = AuthServiceLoginPathConst;
		const urlprofile = AuthServiceProfilePathConst;
		const model = new HttpBodyRespModel();
		this.storageService.clear();

		return this.http.post(url, param).pipe(
			map((resp: any): HttpBodyRespModel => model.convert(resp)),
			map(
				(model: HttpBodyRespModel): HttpBodyRespModel => {
					if (model.status.rc === RESPONSE.SUCCESS) {


						const headers = new HttpHeaders({
							'Content-Type': 'application/json',
							'Authorization': 'Bearer ' + model.data.access_token
						})

						this.http.get(urlprofile, { headers: headers }).subscribe(
							(resp) => {
								this.profiledata = resp;
								localStorage.setItem('profile', JSON.stringify(this.profiledata.data.profile));
								console.log(resp);
								window.location.reload();
							}
						)

						const account = new UserModel();
						account.convert(model.data, 'token');

						if (
							account.accessToken
						) {

							this.storageService.storeAccount(account, 'token');
							this.setAuthenticated(true);

							return model;
						} else {
							return model;
						}

					} else {
						// console.log(model);
						return model;
					}
				}
			),
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
