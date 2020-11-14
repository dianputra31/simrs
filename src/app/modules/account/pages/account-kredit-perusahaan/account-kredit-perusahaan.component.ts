import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import { ProfileUrl, RESPONSE } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';

@Component({
	selector: 'account-kredit-perusahaan',
	templateUrl: './account-kredit-perusahaan.component.html',
	styleUrls: ['./account-kredit-perusahaan.component.scss'],
})
export class AccountKreditPerusahaanComponent implements OnInit {
	limitkredit;
	sisakreditnya;
	@BlockUI() blockUI: NgBlockUI;
	subsribers: Subscription[];

	constructor(private service: BaseService, private http: HttpService) {}

	ngOnInit(): void {
		this.blockUI.start();
		this.subsribers = [];
		const sub = this.http.get(ProfileUrl, {}).subscribe(
			(resp) => {
				this.blockUI.stop();
				if (resp.status.rc == RESPONSE.SUCCESS) {
					this.limitkredit = resp.data.company.credit_limit;
					this.sisakreditnya = resp.data.company.credit_rp;
				} else {
					this.service.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.blockUI.stop();
				this.http.handleError(error);
			}
		);
		this.subsribers.push(sub);
	}
}
