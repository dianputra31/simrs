import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserCompanyUsersUrl } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';

@Component({
	selector: 'account-kelola-purchaser',
	templateUrl: './account-kelola-purchaser.component.html',
	styleUrls: ['./account-kelola-purchaser.component.scss'],
})
export class AccountKelolaPurchaserComponent implements OnInit {
	showAddPurchaserEditor: Boolean;
	subscriptions: Subscription[];
	users: any;

	constructor(private http: HttpService) {}

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
		const sub = this.http.get(UserCompanyUsersUrl).subscribe((resp) => {
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
