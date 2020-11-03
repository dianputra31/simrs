import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import {
	RESPONSE,
	TransactionConfirmUrl,
	TransactionDetailUrl,
} from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { TanggalPipe } from '../../../../pipes/tanggal.pipe';
@Component({
	selector: 'transaction-detail-layout',
	templateUrl: './transaction-detail-layout.component.html',
	styleUrls: ['./transaction-detail-layout.component.scss'],
})
export class TransactionDetailLayoutComponent implements OnInit {
	@BlockUI() blockUI: NgBlockUI;
	subscribers: Subscription[];
	item: any;

	purchased_id: string;
	item_id: string;
	constructor(
		private route: ActivatedRoute,
		private service: BaseService,
		private http: HttpService,
		private datePipe: TanggalPipe
	) {}

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

		const sub = this.http.get(url).subscribe((resp) => {
			this.blockUI.stop();
			if (resp.status.rc === RESPONSE.SUCCESS) {
				this.item = resp.data;
				console.log(this.item);
			} else {
				alert('error');
			}
		});
		this.subscribers.push(sub);
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

	estimateDeliveryTime(item) {
		// if (item) {
		// 	var processDateString = item?.item_status_history?.filter(
		// 		(x) => x.status == 'PROCESS'
		// 	)[0]?.updated_at;

		// 	if (processDateString) {
		// 		var processDate = new Date(processDateString);
		// 		var deliveryDate = new Date(
		// 			processDate.setTime(
		// 				processDate.getTime() + item?.max_days * 86400000
		// 			)
		// 		);

		// 		return this.datePipe.transform(
		// 			deliveryDate.toISOString(),
		// 			'tgl'
		// 		);
		// 	} else {
		// 		return '---';
		// 	}
		// } else {
		// 	return '---';
		// }

		if (item?.item_status_history?.PROCESS != null) {
			var update = item?.item_status_history?.PROCESS.updated_at;

			var processDate = new Date(update);
			var deliveryDate = new Date(
				processDate.setTime(
					processDate.getTime() + item?.max_days * 86400000
				)
			);
			return this.datePipe.transform(deliveryDate.toISOString(), 'tgl');
		}
	}
}
