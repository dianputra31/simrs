import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import {
	TransactionConfirmUrl,
	TransactionDetailUrl,
} from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { TransactionDetailModel } from '../../../../models/transaction-detaily-response.model';
@Component({
	selector: 'transaction-detail-layout',
	templateUrl: './transaction-detail-layout.component.html',
	styleUrls: ['./transaction-detail-layout.component.scss'],
})
export class TransactionDetailLayoutComponent implements OnInit {
	@BlockUI() blockUI: NgBlockUI;
	subscribers: Subscription[];
	item: TransactionDetailModel;

	purchased_id: string;
	item_id: string;
	constructor(private route: ActivatedRoute, private service: BaseService) {}

	ngOnInit(): void {
		this.subscribers = [];
		this.route.paramMap.subscribe((params) => {
			this.blockUI.start();
			this.purchased_id = params.get('purchased_id');
			this.item_id = params.get('item_id');
			this.getTransactionDetail();
		});
	}

	ngOnDestroy() {
		this.subscribers.forEach((each) => each.unsubscribe);
	}

	getTransactionDetail() {
		this.blockUI.start();
		const url = `${TransactionDetailUrl}/${this.purchased_id}/${this.item_id}`;
		const sub = this.service
			.getData(url, TransactionDetailModel, false, false)
			.subscribe((resp) => {
				this.blockUI.stop();
				this.item = resp;
			});
		this.subscribers.push(sub);

		this.blockUI.stop();
	}

	onImgError(event) {
		event.target.src = '../../../../assets/image/icons/default-item.png';
	}

	confirmSelesaiOrder($event) {
		this.blockUI.start();

		const url = `${TransactionConfirmUrl}/${this.purchased_id}/${this.item_id}`;
		const sub = this.service
			.postData(url, false, false, false, false)
			.subscribe((resp) => {
				this.blockUI.stop();
				if (resp.data) {
					this.getTransactionDetail();
				}
			});
		this.subscribers.push(sub);

		this.blockUI.stop();
	}
}
