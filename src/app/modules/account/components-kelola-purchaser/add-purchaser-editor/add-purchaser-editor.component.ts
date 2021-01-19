import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import { RESPONSE, UserCreateUserUrl } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { StorageService } from '../../../../core/storage/service/storage.service';

@Component({
	selector: 'add-purchaser-editor',
	templateUrl: './add-purchaser-editor.component.html',
	styleUrls: ['./add-purchaser-editor.component.scss'],
})
export class AddPurchaserEditorComponent implements OnInit {
	@BlockUI() blockUI: NgBlockUI;
	param = {
		email: '',
		first_name: '',
		last_name: '',
		gender: '',
		role_id: 2,
		company_id: '',
		profile_picture_url: '',
	};
	@Output() addEvent = new EventEmitter();
	subscriptions: Subscription[];
	constructor(
		private http: HttpService,
		private dialogService: BaseService,
		private storageService: StorageService
	) {}

	ngOnInit(): void {
		this.param.company_id = this.storageService.getAccountProfile().company_id;
		this.subscriptions = [];
	}

	ngOnDestroy() {
		this.subscriptions.forEach((each) => each.unsubscribe);
	}

	submit() {
		this.blockUI.start();
		const sub = this.http.post(UserCreateUserUrl, this.param).subscribe(
			(resp) => {
				this.blockUI.stop();
				if (resp.status.rc == RESPONSE.SUCCESS) {
					this.addEvent.emit();
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

	valid() {
		var valid = true;
		var p = RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$');

		if (this.param.email == '') {
			valid = false;
		} else if (!p.test(this.param.email)) {
			valid = false;
		} else if (this.param.first_name == '') {
			valid = false;
		} else if (this.param.last_name == '') {
			valid = false;
		}
		return valid;
	}
}
