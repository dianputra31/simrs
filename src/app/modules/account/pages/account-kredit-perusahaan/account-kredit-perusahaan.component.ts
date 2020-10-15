import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProfileUrl } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';

@Component({
	selector: 'account-kredit-perusahaan',
	templateUrl: './account-kredit-perusahaan.component.html',
	styleUrls: ['./account-kredit-perusahaan.component.scss']
})
export class AccountKreditPerusahaanComponent implements OnInit {
	limitkredit;
	sisakreditnya;
	subsribers: Subscription[];

	constructor(
		private service: BaseService,
	) { }

	ngOnInit(): void {
		this.subsribers = [];
		const sub = this.service
			.getData(ProfileUrl, false, null, true)
			.subscribe((resp) => {
				console.log(resp.data.company);
				this.limitkredit = resp.data.company.credit_limit;
				this.sisakreditnya = resp.data.company.credit_rp;
			});
		this.subsribers.push(sub);



	}

}
