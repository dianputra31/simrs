import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import {
	CartListUrl,
	CheckoutCartUrl,
	RESPONSE,
} from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { ItemTelahDihapusComponent } from '../../../../shared2/components/item-telah-dihapus/item-telah-dihapus.component';
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

	@ViewChild(ItemTelahDihapusComponent, { static: false })
	notif: ItemTelahDihapusComponent;

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
		const sub = this.service.get(CartListUrl).subscribe(
			(resp) => {
				if (resp.status.rc == RESPONSE.SUCCESS) {
					this.items = resp.data.cart_list;
					this.total_item = resp.data.total_item;

					this.items.sort(function (a, b) {
						return b.updated_at - a.updated_at;
					});

					this.items.forEach((item) => {
						item.selected = this.select(item);
						item.enableSelection = this.select(item);
					});

					this.total_price = resp.total_price;

					setTimeout(() => {
						this.initScrolling();
						this.blockUI.stop();
					}, 40);
				} else {
					this.dialogService.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.blockUI.stop();
				this.service.handleError(error);
			}
		);

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

	updateItemCartList(newItem, i) {
		console.log(newItem);
		this.items[i] = newItem;

		this.items[i].selected = this.select(this.items[i]);
		this.items[i].enableSelection = this.select(this.items[i]);

		// this.getCartItem();
	}

	deleteItemCartList(i) {
		this.notif.showNotif();
		this.items.splice(i, 1);
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

				if (resp.status.rc == RESPONSE.SUCCESS) {
					const stringnya = JSON.stringify(resp);
					localStorage.setItem('checkout-cart', stringnya);
					this.router.navigate(['./request-approval']);
				} else {
					this.dialogService.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.blockUI.stop();
				this.service.handleError(error);
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
