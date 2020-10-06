import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TransactionListUrl } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { TransactionItemResponseModel } from '../../../../models/transaction-item-response.model';
import { TransactionListRequestModel } from '../../../../models/transaction-list-request.model';

@Component({
	selector: 'transaction-layout',
	templateUrl: './transaction-layout.component.html',
	styleUrls: ['./transaction-layout.component.scss'],
})
export class TransactionLayoutComponent implements OnInit {
	subsribers: Subscription[];
	param: TransactionListRequestModel;
	items: TransactionItemResponseModel[];
	constructor(private service: BaseService) {}

	ngOnInit(): void {
		this.param = new TransactionListRequestModel();
		this.param.address_id = 0;

		this.param.end_date = '';
		this.param.keyword = '';
		this.param.limit = 0;
		this.param.page = 0;
		this.param.start_date = '';
		this.param.user_id = 0;
		this.subsribers = [];

		this.getTrxList();
	}

	getTrxList() {
		console.log('param-get trxlist: ', this.param.convert());

		const sub = this.service
			.postData2(
				TransactionListUrl,
				this.param,
				TransactionItemResponseModel,
				null,
				true
			)
			.subscribe((resp) => {
				console.log(resp);
			});
		this.subsribers.push(sub);
	}
}
