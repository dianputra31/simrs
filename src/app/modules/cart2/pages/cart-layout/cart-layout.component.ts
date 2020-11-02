import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import { CartListUrl, CheckoutCartUrl } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { CartItemRequestModel } from '../../../../models/cart-item-request.model';
import { CartItemResponseModel } from '../../../../models/cart-item-response.model';
import { CartItemModel } from '../../../../models/cart-item.model';
import { CartListItemModel } from '../../../../models/cart-list-item.model';
import { CartListResponseModel } from '../../../../models/cart-list-response.model';
import { Convert } from '../../../../models/cart-list.model';
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
	constructor(private service: BaseService, private router: Router) {}

	ngOnInit(): void {
		this.subscribers = [];
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
				console.log(this.items[index]);
				const element: CartListItemModel = this.items[index];

				pertotalan.totalFee += element.admin_fee;
				pertotalan.ppn += Math.round(element.ppn);
				pertotalan.ppn3 += Math.round(element.pph);
				pertotalan.ongkir += element.shipping_cost;
				pertotalan.totalPrice += element.purchase_amount;
				pertotalan.totalItem += 1;
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
		return this.items?.filter((x) => x.selected).length;
	}

	pilihSemuaClickEvent(pilihSemuaValue) {
		for (var i in this.items) {
			if (this.items[i].enableSelection) {
				this.items[i].selected = pilihSemuaValue;
			}
		}
	}

	selanjutnyaClick() {
		var cartreq = new CartItemRequestModel();
		cartreq.cart_list = [];
		for (var i = 0; i < this.items.length; i++) {
			if (this.items[i].selected) {
				var x = new CartItemModel();
				x.product_id = this.items[i].product_id;
				x.quantity = this.items[i].quantity;
				cartreq.cart_list.push(x);
			}
		}

		this.blockUI.start();
		const sub = this.service
			.postData(CheckoutCartUrl, cartreq, CartItemResponseModel, false)
			.subscribe((resp) => {
				this.blockUI.stop();
				console.log(resp);
				const stringnya = Convert.cartListToJson(resp);
				const cartList = Convert.toCartList(stringnya);
				localStorage.setItem('checkout-cart', stringnya);
				this.router.navigate(['./request-approval']);
			});
		this.subscribers.push(sub);
	}
}
