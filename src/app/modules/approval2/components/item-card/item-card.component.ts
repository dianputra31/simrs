import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import { AddCart } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { CartItemRequestModel } from '../../../../models/cart-item-request.model';
import { CartItemResponseModel } from '../../../../models/cart-item-response.model';
import { CartItemModel } from '../../../../models/cart-item.model';
import { CartListItemModel } from '../../../../models/cart-list-item.model';
import { ToastService } from '../../../../shared/toast/toast-service';

@Component({
	selector: 'item-card',
	templateUrl: './item-card.component.html',
	styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
	@Input() item: CartListItemModel;
	@Output() onUpdateQty = new EventEmitter();
	@BlockUI() blockUI: NgBlockUI;

	subscribers: Subscription[];
	constructor(
		public service: BaseService,
		public toastService: ToastService
	) {}

	ngOnInit(): void {
		this.subscribers = [];
	}

	ngOnDestroy() {
		this.subscribers.forEach((each) => each.unsubscribe);
	}

	handleClickCheckbox(checked) {
		this.item.selected = checked;
	}
	handleQtyUpdate(qty) {
		this.item.quantity = qty;
		// this.onUpdateQty.emit();
		this.updateItemCart();
	}

	onImgError(event) {
		event.target.src = '../../../../assets/image/icons/default-item.png';
	}

	updateItemCart() {
		var test = new CartItemModel();
		test.product_id = this.item.product_id;
		test.quantity = this.item.quantity;

		var cartreq = new CartItemRequestModel();
		cartreq.cart_list = [];
		cartreq.cart_list.push(test);
		this.blockUI.start();
		const sub = this.service
			.postData(AddCart, cartreq, CartItemResponseModel, false)
			.subscribe((resp) => {
				this.blockUI.stop();
				this.onUpdateQty.emit();
			});

		this.subscribers.push(sub);
	}

	deleteItem(dangerTpl, item: CartListItemModel) {
		var test = new CartItemModel();
		test.product_id = item.product_id;
		test.quantity = 0;

		var cartreq = new CartItemRequestModel();
		cartreq.cart_list = [];
		cartreq.cart_list.push(test);
		this.blockUI.start();
		const sub = this.service
			.postData(AddCart, cartreq, CartItemResponseModel, false)
			.subscribe((resp) => {
				this.blockUI.stop();
				this.showDanger(dangerTpl);
				this.onUpdateQty.emit();
			});
		this.subscribers.push(sub);
	}

	showDanger(dangerTpl) {
		this.toastService.removeAll();
		this.toastService.show(dangerTpl, {
			delay: 15000,
			classname: 'bawah-tengah',
		});
	}
}
