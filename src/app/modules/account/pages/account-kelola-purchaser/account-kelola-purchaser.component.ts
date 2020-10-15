import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserCompanyUsersUrl } from '../../../../app.constant';

@Component({
	selector: 'account-kelola-purchaser',
	templateUrl: './account-kelola-purchaser.component.html',
	styleUrls: ['./account-kelola-purchaser.component.scss'],
})
export class AccountKelolaPurchaserComponent implements OnInit {
	showAddPurchaserEditor: Boolean;
	subscriptions: Subscription[];
	users: any;

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.subscriptions = [];
		this.getUserList();
		this.showAddPurchaserEditor = false;
	}

	ngOnDestroy() {
		this.subscriptions.forEach((each) => each.unsubscribe);
	}

	addPurchaser() {
		this.showAddPurchaserEditor = !this.showAddPurchaserEditor;
	}

	getUserList() {
		const sub = this.http
			.get(UserCompanyUsersUrl)
			.pipe(
				map((resp: any): any => {
					return resp;
				}),
				catchError((err, caught: Observable<HttpEvent<any>>) => {
					if (err instanceof HttpErrorResponse && err.status == 401) {
						// this.storageService.clear();
						// this._document.defaultView.location.reload();
						return of(err as any);
					}
					throw err;
				})
			)
			.subscribe((resp) => {
				this.users = resp.data;
			});

		this.subscriptions.push(sub);
	}

	onAddUserEvent() {
		this.getUserList();

		this.showAddPurchaserEditor = false;
	}

	onDeleteEvent() {
		this.getUserList();
	}
}
