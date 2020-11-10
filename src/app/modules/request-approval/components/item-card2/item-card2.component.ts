import { Component, Input, OnInit } from '@angular/core';
import {
	REQUEST_APPROVAL_STATUS,
	REQUEST_APPROVAL_STATUS_DICT,
} from '../../request-approval.constant';

@Component({
	selector: 'item-card2',
	templateUrl: './item-card2.component.html',
	styleUrls: ['./item-card2.component.scss'],
})
export class ItemCard2Component implements OnInit {
	@Input() item: any;
	constructor() {}

	ngOnInit(): void {}

	blurItem() {
		return this.item.status !== REQUEST_APPROVAL_STATUS_DICT.OK;
	}

	status() {
		var x = REQUEST_APPROVAL_STATUS.find(
			(s) => s.status == this.item.status
		);
		return x?.display;
	}

	onImgError(event) {
		event.target.src = '../../../../assets/image/icons/default-item.png';
	}
}
