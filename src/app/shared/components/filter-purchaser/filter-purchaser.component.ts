import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetCompanyUsers } from '../../../app.constant';
import { BaseService } from '../../../core/base-service/service/base.service';
import { PurchaserComboItemResponseModel } from '../../../models/purchaser-combo-item-response.model';

@Component({
	selector: 'filter-purchaser',
	templateUrl: './filter-purchaser.component.html',
	styleUrls: ['./filter-purchaser.component.scss'],
})
export class FilterPurchaserComponent implements OnInit {
	purchasers = [];
	selected;
	subsribers: Subscription[];
	@Output() user_id = new EventEmitter<number>();

	constructor(private router: Router, private service: BaseService) {}

	ngOnInit(): void {
		this.subsribers = [];
		this.purchaser_list();
	}

	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe);
	}

	purchaser_list() {
		const sub = this.service
			.getData(
				GetCompanyUsers,
				PurchaserComboItemResponseModel,
				null,
				true
			)
			.subscribe((resp) => {
				this.purchasers = resp;

				const x = new PurchaserComboItemResponseModel();
				x.fullname = 'Semua';
				x.id = null;
				this.purchasers.splice(0, 0, x);
				this.selected = resp[0];
				this.selectedUser(this.selected);
			});

		this.subsribers.push(sub);
	}

	selectedUser(purchaser) {
		this.user_id.emit(purchaser.id);
	}
}
