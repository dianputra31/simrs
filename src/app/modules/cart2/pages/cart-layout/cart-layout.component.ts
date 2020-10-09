import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import { CartListUrl } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { StorageService } from '../../../../core/storage/service/storage.service';
import { CartListItemModel } from '../../../../models/cart-list-item.model';
import { CartListResponseModel } from '../../../../models/cart-list-response.model';
@Component({
	selector: 'cart-layout',
	templateUrl: './cart-layout.component.html',
	styleUrls: ['./cart-layout.component.scss'],
})
export class CartLayoutComponent implements OnInit {
	subscribers: Subscription[];
	items: CartListItemModel[];
	total_item: number = 0;
	total_price: number;

	@BlockUI() blockUI: NgBlockUI;
	constructor(
		private service: BaseService,
		private storage: StorageService
	) {}

	ngOnInit(): void {
		this.getCartItem();
	}

	ngOnDestroy() {
		this.subscribers.forEach((each) => each.unsubscribe);
	}

	getCartItem() {
		this.blockUI.start();
		const sub = this.service
			.getData(CartListUrl, CartListResponseModel, null, false)
			.subscribe((resp) => {
				this.blockUI.stop();
				this.items = resp.cart_list;
				this.total_item = resp.total_item;
				this.total_price = resp.total_price;
			});

		this.subscribers.push(sub);
	}

	updateItemCartList(t) {
		this.getCartItem();
	}

	calculate() {
		var pertotalan = {
			totalPrice: 0,
			totalItem: 0,
			totalFee: 0,
			ppn: 0,
			ppn3: 0,
			ongkir: 0,
			subtotal: 0,
			grandtotal: 0,
		};
		// pertotalan.saldo = this.company.credit_rp;
		pertotalan.totalPrice = 0;
		pertotalan.totalItem = 0;
		for (var index in this.items) {
			if (this.items[index].selected) {
				const element: CartListItemModel = this.items[index];

				pertotalan.totalFee +=
					element.stock - element.quantity < 0
						? 0
						: element.admin_fee;
				pertotalan.ppn +=
					element.stock - element.quantity < 0 ? 0 : element.ppn;
				pertotalan.ppn3 +=
					element.stock - element.quantity < 0 ? 0 : element.pph;
				pertotalan.ongkir +=
					element.stock - element.quantity < 0
						? 0
						: element.shipping_cost;
				pertotalan.totalPrice +=
					element.stock - element.quantity < 0
						? 0
						: element.purchase_amount;
				pertotalan.totalItem +=
					element.stock - element.quantity < 0 ? 0 : 1;
			}
			pertotalan.subtotal = pertotalan.totalPrice + pertotalan.totalFee;
			pertotalan.grandtotal =
				pertotalan.subtotal +
				pertotalan.ppn +
				pertotalan.ppn3 +
				pertotalan.ongkir;
		}

		return pertotalan;
	}

	numberOfItemsSelected() {
		return this.items.filter((x) => x.selected).length;
	}
}
