import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { TransactionStatusOptionUrl } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { TransactionListRequestModel } from '../../../../models/transaction-list-request.model';
import { TransactionStatusOptionResponseModel } from '../../../../models/transaction-status-option-response.model';

@Component({
	selector: 'list-status-section',
	templateUrl: './list-status-section.component.html',
	styleUrls: ['./list-status-section.component.scss'],
})
export class ListStatusSectionComponent implements OnInit {
	statuses: TransactionStatusOptionResponseModel[];
	selected: TransactionStatusOptionResponseModel;
	@Output() onStatusSelected = new EventEmitter<
		TransactionStatusOptionResponseModel
	>();
	subsribers: Subscription[];

	constructor(private service: BaseService) {}

	ngOnInit(): void {
		this.subsribers = [];
		this.getTrxStatus();
	}

	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe);
	}

	getTrxStatus() {
		const sub = this.service
			.postData2(
				TransactionStatusOptionUrl,
				new TransactionListRequestModel(),
				TransactionStatusOptionResponseModel,
				null,
				true
			)
			.subscribe((resp) => {
				this.statuses = resp;

				this.selected = this.statuses[0];
			});
		this.subsribers.push(sub);
	}

	clickStatus(status) {
		this.selected = status;
		this.onStatusSelected.emit(this.selected);
	}
}
