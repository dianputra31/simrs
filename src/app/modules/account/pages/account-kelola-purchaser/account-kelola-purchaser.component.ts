import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import { RESPONSE, UserCompanyUsersUrl } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { USER_ROLE_DICT } from '../../account.constant';
@Component({
	selector: 'account-kelola-purchaser',
	templateUrl: './account-kelola-purchaser.component.html',
	styleUrls: ['./account-kelola-purchaser.component.scss'],
})
export class AccountKelolaPurchaserComponent implements OnInit {
	@BlockUI() blockUI: NgBlockUI;
	showAddPurchaserEditor: Boolean;
	subscriptions: Subscription[];
	users: any;

	constructor(
		private http: HttpService,
		private dialogService: BaseService
	) {}

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
		this.blockUI.start();
		const sub = this.http.get(UserCompanyUsersUrl).subscribe(
			(resp) => {
				this.blockUI.stop();
				if (resp.status.rc == RESPONSE.SUCCESS) {
					const usersList: any[] = resp.data;
					this.users = usersList.filter(
						(user) => user.role_id == USER_ROLE_DICT.PURCHASER
					);
				} else {
					this.dialogService.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.blockUI.stop();
				this.http.handleError(error);
			}
		);

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
