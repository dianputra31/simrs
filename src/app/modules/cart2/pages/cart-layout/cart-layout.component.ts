import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import { CartListUrl, CheckoutCartUrl } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { ITEM_AVAILABILITY_DICT } from '../../cart.constant';
@Component({
	selector: 'cart-layout',
	templateUrl: './cart-layout2.component.html',
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
	constructor(
		private service: HttpService,
		private router: Router,
		private dialogService: BaseService
	) {}

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
			console.log(this.items);
			this.items.sort(function (a, b) {
				return b.updated_at - a.updated_at;
			});

			this.items.forEach((item) => {
				item.selected = this.select(item);
				item.enableSelection = this.select(item);
			});
			console.log(this.items);
			this.total_item = resp.total_item;
			this.total_price = resp.total_price;

			setTimeout(() => {
				this.initScrolling();
				this.blockUI.stop();
			}, 40);
		});

		this.subscribers.push(sub);
	}

	public select(item) {
		if (
			item.availability == ITEM_AVAILABILITY_DICT.AVAILABLE ||
			item.availability == ITEM_AVAILABILITY_DICT.LIMITED
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

		var selectedItem = this.items.filter((x) => x.selected);

		pertotalan.totalPrice = 0;
		pertotalan.totalItem = 0;
		selectedItem.forEach((item) => {
			pertotalan.totalFee += item.admin_fee;
			pertotalan.ppn += Math.round(item.ppn);
			pertotalan.ppn3 += Math.round(item.pph);
			pertotalan.ongkir += item.shipping_cost;
			pertotalan.totalPrice += item.purchase_amount;
			pertotalan.totalItem += 1;

			pertotalan.subtotal = pertotalan.totalPrice + pertotalan.totalFee;
			pertotalan.grandtotal =
				pertotalan.subtotal +
				pertotalan.ppn +
				pertotalan.ppn3 +
				pertotalan.ongkir;
		});

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
		var param = {
			cart_list: [],
		};

		this.items.forEach((item) => {
			if (item.selected) {
				param.cart_list.push({
					product_id: item.product_id,
					quantity: item.quantity,
				});
			}
		});

		this.blockUI.start();
		const sub = this.service.post(CheckoutCartUrl, param).subscribe(
			(resp) => {
				this.blockUI.stop();

				const stringnya = JSON.stringify(resp);
				localStorage.setItem('checkout-cart', stringnya);
				this.router.navigate(['./request-approval']);
			},
			(error: any) => {
				this.blockUI.stop();
				if (error.status === 400) {
					this.dialogService.showAlert(error.error.msg);
				}
			}
		);

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
