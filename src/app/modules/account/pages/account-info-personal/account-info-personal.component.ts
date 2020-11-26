import { Component, Input, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import { EditProfile, ProfileUrl, RESPONSE } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';

@Component({
	selector: 'account-info-personal',
	templateUrl: './account-info-personal.component.html',
	styleUrls: ['./account-info-personal.component.scss'],
})
export class AccountInfoPersonalComponent implements OnInit {
	@BlockUI() blockUI: NgBlockUI;
	@Input() firstnameEdit: String;
	@Input() lastnameEdit: String;

	datausr;
	isEditting;
	firstName;
	lastName;
	firstname;
	lastname;
	email;

	param = {
		email: '',
		first_name: '',
		last_name: '',
		gender: '',
		role_id: '',
		company_id: '',
		profile_picture_url: '',
	};

	constructor(private http: HttpService, private service: BaseService) {}

	subsribers: Subscription[];

	ngOnInit(): void {
		this.subsribers = [];
		this.blockUI.start();
		const sub = this.http.get(ProfileUrl, '').subscribe(
			(resp) => {
				this.blockUI.stop();
				if (resp.status.rc == RESPONSE.SUCCESS) {
					var datausr = resp.data.profile;
					this.firstName = datausr.fullname
						.split(' ')
						.slice(0, -1)
						.join(' ');
					this.lastName = datausr.fullname
						.split(' ')
						.slice(-1)
						.join(' ');
					this.email = datausr.email;

					this.param.email = datausr.email;
					this.param.first_name = this.firstName;
					this.param.last_name = this.lastName;
					this.param.role_id = datausr.role_id;
					this.param.company_id = datausr.company_id;
					this.param.profile_picture_url =
						datausr.profile_picture_url;
					this.isEditting = false;
				} else {
					this.service.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.blockUI.stop();
				this.http.handleError(error);
			}
		);
	}

	save() {
		this.isEditting = false;

		this.blockUI.start();
		this.http.post(EditProfile + this.param.email, this.param).subscribe(
			(resp) => {
				this.blockUI.stop();
				if (resp.status.rc == RESPONSE.SUCCESS) {
					// this.service.showAlert('SUKSES');
				} else {
					resp.status.msg = "Maaf terjadi kesalahan, silakan masukkan kembali data anda";
					this.service.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.blockUI.stop();
				this.http.handleError(error);
			}
		);
	}

	edit() {
		this.isEditting = true;
	}

	firstnameChange(event) {
		this.param.first_name = event;
	}

	lastnameChange(event) {
		this.param.last_name = event;
	}
}
