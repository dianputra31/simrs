import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import { TransactionDetailUrl } from '../../../../app.constant';
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

	constructor(private route: ActivatedRoute, private service: BaseService) {}

	ngOnInit(): void {
		this.subscribers = [];
		this.route.paramMap.subscribe((params) => {
			this.blockUI.start();
			this.getTransactionDetail(
				params.get('purchased_id'),
				params.get('item_id')
			);
			// this.getItems(
			// 	params.get('category_id'),
			// 	params.get('sub_category_id'),
			// 	this._redirectparam.namaproduk,
			// 	this._redirectparam.price_start,
			// 	this._redirectparam.price_end,
			// );
			// this.category_id = params.get('category_id');
			// if (this._redirectparam.namaproduk !== '' && this._redirectparam.namaproduk !== '0') this.keyword = '"' + this._redirectparam.namaproduk + '"'; else this.keyword = '';
		});
	}

	ngOnDestroy() {
		this.subscribers.forEach((each) => each.unsubscribe);
	}

	getTransactionDetail(purchaseId, itemId) {
		const url = `${TransactionDetailUrl}/${purchaseId}/${itemId}`;
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
}
