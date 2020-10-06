import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddCart } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { CartItemRequestModel } from '../../../../models/cart-item-request.model';
import { CartItemResponseModel } from '../../../../models/cart-item-response.model';
import { CartItemModel } from '../../../../models/cart-item.model';
import { CartListElement } from '../../../../models/cart-list.model';
import { QuantityModel } from '../../../../models/quantity.model';
import { ToastService } from '../../../../shared/toast/toast-service';

@Component({
	selector: 'item-list',
	templateUrl: './item-list.component.html',
	styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
	@Input() items: CartListElement[];
	@Output() recalculate = new EventEmitter<boolean>();
	constructor(
		public toastService: ToastService,
		public service: BaseService
	) { }

	subsribers: Subscription[];

	ngOnInit(): void {
		this.subsribers = [];
	}

	ngOnDestroy(): void {
		this.subsribers.forEach((each) => each.unsubscribe);
	}
	deleteItem(dangerTpl, item: CartListElement) {
		var test = new CartItemModel();
		test.product_id = item.product_id;
		test.quantity = 0;

		var cartreq = new CartItemRequestModel();
		cartreq.cart_list = [];
		cartreq.cart_list.push(test);

		const sub = this.service
			.postData(AddCart, cartreq, CartItemResponseModel, false)
			.subscribe((resp) => {
				console.log('resp: ', resp);
				this.recalculate.emit(true);
			});
		this.subsribers.push(sub);

		this.showDanger(dangerTpl);
	}

	showDanger(dangerTpl) {
		this.toastService.removeAll();
		this.toastService.show(dangerTpl, {
			delay: 15000,
			classname: 'bawah-tengah',
		});
	}

	shouldSelectItem(outOfStock, selected) {
		if (outOfStock) {
			return false;
		} else {
			return selected == 1;
		}
	}

	getQtyObj(qty) {
		var qtyObject = new QuantityModel();

		qtyObject.qty = qty;
		qtyObject.qtyDisplay = qtyObject.display();
		return qtyObject;
	}

	n = 0;
	test(h: CartListElement) {
		this.n++;
		console.log(this.n);
		// console.log((h.selected = false));

		h.product_name = h.selected + '';
	}

	clickCheckBox(item: CartListElement) {
		item.selected = !item.selected;
	}

	update(item: CartListElement) {
		var test = new CartItemModel();
		test.product_id = item.product_id;
		test.quantity = item.qtyObject.qty;

		var cartreq = new CartItemRequestModel();
		cartreq.cart_list = [];
		cartreq.cart_list.push(test);

		const sub = this.service
			.postData(AddCart, cartreq, CartItemResponseModel, false)
			.subscribe((resp) => {
				console.log('resp: ', resp);
				this.recalculate.emit(true);
			});
		this.subsribers.push(sub);
	}
}
