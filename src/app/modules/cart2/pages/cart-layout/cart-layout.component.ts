import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import { CartListUrl, CheckoutCartUrl } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { CartItemRequestModel } from '../../../../models/cart-item-request.model';
import { CartItemModel } from '../../../../models/cart-item.model';
import { Convert } from '../../../../models/cart-list.model';
@Component({
	selector: 'cart-layout',
	templateUrl: './cart-layout.component.html',
	styleUrls: ['./cart-layout.component.scss'],
})
export class CartLayoutComponent implements OnInit {
	subscribers: Subscription[];
	items: any[];
	total_item: number = 0;
	total_price: number;

	leftContainerHeight;
	windowHeight;
	topFixed;
	headers;
	@BlockUI() blockUI: NgBlockUI;
	constructor(private service: HttpService, private router: Router) {}

	ngOnInit(): void {
		this.subscribers = [];
		this.getCartItem();

		const body = document.getElementsByTagName('body')[0];
		body.classList.add('no-scroll');
	}

	ngOnDestroy() {
		this.subscribers.forEach((each) => each.unsubscribe);

		const body = document.getElementsByTagName('body')[0];
		body.classList.remove('no-scroll');
	}

	getCartItem() {
		this.blockUI.start();
		const sub = this.service.get(CartListUrl).subscribe((resp) => {
			this.items = resp.data.cart_list;

			this.items.forEach((item) => {
				item.selected = this.select(item);
				item.enableSelection = this.select(item);
			});
			this.total_item = resp.total_item;
			this.total_price = resp.total_price;

			setTimeout(() => {
				this.initScrolling();
				this.blockUI.stop();
			}, 0);
		});

		this.subscribers.push(sub);
	}

	public select(item) {
		if (
			item.availability == 'AVAILABLE' ||
			item.availability == 'LIMITED'
		) {
			return true;
		} else {
			return false;
		}
	}

	updateItemCartList() {
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
				const element: any = this.items[index];

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

		console.log(cartreq);
		this.blockUI.start();
		const sub = this.service
			.post(CheckoutCartUrl, { cartreq })
			.subscribe((resp) => {
				this.blockUI.stop();
				const stringnya = Convert.cartListToJson(resp);
				localStorage.setItem('checkout-cart', stringnya);
				this.router.navigate(['./request-approval']);
			});

		this.subscribers.push(sub);
	}

	initScrolling() {
		// this.topFixed = document?.getElementById('top-fixed')?.offsetHeight;
		this.topFixed = document?.getElementById('top-fixed')?.offsetHeight;
		this.headers = document?.getElementById('headers')?.offsetHeight;

		this.onResize();
	}

	@HostListener('window:resize', ['$event'])
	onResize() {
		this.windowHeight = window.innerHeight;

		this.leftContainerHeight =
			this.windowHeight - this.topFixed - this.headers;
	}
}
