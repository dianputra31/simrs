import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartListUrl, CheckoutCartUrl } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { CartItemRequestModel } from '../../../../models/cart-item-request.model';
import { CartItemResponseModel } from '../../../../models/cart-item-response.model';
import { CartItemModel } from '../../../../models/cart-item.model';
import { CartListElement, Convert } from '../../../../models/cart-list.model';
import { Company, ConvertCompany } from '../../../../models/company.model';
import { QuantityModel } from '../../../../models/quantity.model';
@Component({
	selector: 'cart-layout',
	templateUrl: './cart-layout.component.html',
	styleUrls: ['./cart-layout.component.scss'],
})
export class CartLayoutComponent implements OnInit {
	subsribers: Subscription[];
	items: CartListElement[] = [];
	selectedItems: CartListElement[] = [];
	itemsoriginal: CartListElement[] = [];
	constructor(private route: ActivatedRoute, private service: BaseService) {}
	isEmpty = 0;
	company: Company = null;

	pertotalan = {
		saldo: 0,
		totalPrice: 0,
		totalItem: 0,
		totalFee: 0,
		ppn: 0,
		ppn3: 0,
		ongkir: 0,
		subtotal: 0,
		grandtotal: 0,
	};

	reset() {
		this.pertotalan = {
			saldo: 0,
			totalPrice: 0,
			totalItem: 0,
			totalFee: 0,
			ppn: 0,
			ppn3: 0,
			ongkir: 0,
			subtotal: 0,
			grandtotal: 0,
		};
		this.items = [];
		this.selectedItems = [];
		this.itemsoriginal = [];
	}
	ngOnInit(): void {
		var ls = localStorage.getItem('company');
		this.company = ConvertCompany.toCompany(ls);
		this.pertotalan.saldo = this.company.credit_rp;
		this.subsribers = [];
		this.route.paramMap.subscribe((params) => {
			this.getCartItem();
		});
	}

	getCartItem() {
		const sub = this.service
			.getData(CartListUrl, false, null, true)
			.subscribe((resp) => {
				this.reset();
				const stringnya = Convert.cartListToJson(resp);
				const cartList = Convert.toCartList(stringnya);
				this.itemsoriginal = cartList.data.cart_list;
				this.isEmpty = this.itemsoriginal.length;
				if (this.isEmpty > 0) {
					for (
						let index = 0;
						index < this.itemsoriginal.length;
						index++
					) {
						const element: CartListElement = this.itemsoriginal[
							index
						];
						element.outOfStock =
							element.stock - element.quantity < 0;

						if (element.stock - element.quantity < 0) {
						} else {
							this.selectedItems.push(element);
						}
						element.selected = element.stock != 0;

						element.qtyObject = new QuantityModel();
						element.qtyObject.qty = element.quantity;
						element.qtyObject.qtyDisplay = element.qtyObject.display();

						this.items.push(element);
						this.pertotalan.totalFee +=
							element.stock - element.quantity < 0
								? 0
								: element.admin_fee;
						this.pertotalan.ppn +=
							element.stock - element.quantity < 0
								? 0
								: element.ppn;
						this.pertotalan.ppn3 +=
							element.stock - element.quantity < 0
								? 0
								: element.pph;
						this.pertotalan.ongkir +=
							element.stock - element.quantity < 0
								? 0
								: element.shipping_cost;
						this.pertotalan.totalPrice +=
							element.stock - element.quantity < 0
								? 0
								: element.purchase_amount;
						this.pertotalan.totalItem +=
							element.stock - element.quantity < 0 ? 0 : 1;

						this.pertotalan.subtotal +=
							element.stock - element.quantity < 0
								? 0
								: element.sub_total;
					}

					this.pertotalan.grandtotal =
						this.pertotalan.subtotal +
						this.pertotalan.ppn +
						this.pertotalan.ppn3 +
						this.pertotalan.ongkir;
				}
			});

		this.subsribers.push(sub);
	}

	pilihSemuaEventHandler(pilihSemuaStatus) {
		this.pertotalan.saldo = this.company.credit_rp;
		if (pilihSemuaStatus) {
			pilihSemuaStatus = false;
		} else {
			pilihSemuaStatus = true;
		}
		this.hitungJumlah();
	}

	adaItemDipilih() {
		var adaItemChecked = false;
		for (var index in this.items) {
			const element: CartListElement = this.items[index];
			if (element.selected == true) {
				adaItemChecked = true;
			} else {
				element.selected = false;
			}
		}

		this.hitungJumlah();
		adaItemChecked =
			this.selectedItems.length == 0 ? false : adaItemChecked;
		return adaItemChecked;
	}

	hitungJumlah() {
		this.pertotalan = {
			saldo: 0,
			totalPrice: 0,
			totalItem: 0,
			totalFee: 0,
			ppn: 0,
			ppn3: 0,
			ongkir: 0,
			subtotal: 0,
			grandtotal: 0,
		};
		this.pertotalan.saldo = this.company.credit_rp;

		this.pertotalan.totalPrice = 0;
		this.pertotalan.totalItem = 0;
		for (var index in this.items) {
			const element: CartListElement = this.items[index];

			element.outOfStock = element.stock - element.quantity < 0;
			element.selected = element.stock != 0;
			this.pertotalan.totalFee +=
				element.stock - element.quantity < 0 ? 0 : element.admin_fee;
			this.pertotalan.ppn +=
				element.stock - element.quantity < 0 ? 0 : element.ppn;
			this.pertotalan.ppn3 +=
				element.stock - element.quantity < 0 ? 0 : element.pph;
			this.pertotalan.ongkir +=
				element.stock - element.quantity < 0
					? 0
					: element.shipping_cost;
			this.pertotalan.totalPrice +=
				element.stock - element.quantity < 0
					? 0
					: element.purchase_amount;
			this.pertotalan.totalItem +=
				element.stock - element.quantity < 0 ? 0 : 1;
		}
		this.pertotalan.subtotal =
			this.pertotalan.totalPrice + this.pertotalan.totalFee;
		this.pertotalan.grandtotal =
			this.pertotalan.subtotal +
			this.pertotalan.ppn +
			this.pertotalan.ppn3 +
			this.pertotalan.ongkir;
	}

	selanjutnyaClick() {
		var cartreq = new CartItemRequestModel();
		cartreq.cart_list = [];
		for (var i = 0; i < this.selectedItems.length; i++) {
			var x = new CartItemModel();
			x.product_id = this.selectedItems[i].product_id;
			x.quantity = this.selectedItems[i].qtyObject.qty;
			cartreq.cart_list.push(x);
		}

		const sub = this.service
			.postData(CheckoutCartUrl, cartreq, CartItemResponseModel, false)
			.subscribe((resp) => {
				console.log('resp: ', resp);
				const stringnya = Convert.cartListToJson(resp);
				const cartList = Convert.toCartList(stringnya);
				console.log(cartList);
			});
		this.subsribers.push(sub);

		// const param = new ProductCatalogRequestModel();

		// param.category_id = category_id;
		// param.limit = 6;

		// const url = ProductCatalogUrl + '?' + param.convertQueryParameter();
		// const sub = this.service
		// 	.getData(url, ProductCatalogResponseModel, null, true)
		// 	.subscribe((resp) => {
		// 		this.productCatalogRows.push(resp);
		// 	});

		// this.subsribers.push(sub);
	}

	ngOnDestroy() {}

	recalculate() {
		this.getCartItem();
	}
}
