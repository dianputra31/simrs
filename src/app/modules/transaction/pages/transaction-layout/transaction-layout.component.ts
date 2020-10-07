import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TransactionListUrl } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { TransactionItemResponseModel } from '../../../../models/transaction-item-response.model';
import { TransactionListRequestModel } from '../../../../models/transaction-list-request.model';
import { TransactionStatusOptionResponseModel } from '../../../../models/transaction-status-option-response.model';

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
		this.param.status_code = 'ALL';
		// this.param.address_id = null;
		// this.param.end_date = null;
		// this.param.keyword = null;
		// this.param.limit = null;
		// this.param.page = null;
		// this.param.start_date = null;
		// this.param.user_id = null;
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
				this.items = resp;
				console.log(resp);
			});
		this.subsribers.push(sub);
	}

	handleSelectStatus(status: TransactionStatusOptionResponseModel) {
		this.param.status_code = status.status_code;
		this.getTrxList();
	}
}
