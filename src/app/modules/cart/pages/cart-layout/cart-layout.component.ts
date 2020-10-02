import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartListUrl } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
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
	items: CartListElement[];
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
				const stringnya = Convert.cartListToJson(resp);
				const cartList = Convert.toCartList(stringnya);
				this.items = cartList.data.cart_list;

				for (var i = 0; i < this.items.length; i++) {
					this.items[i].qtyObject = new QuantityModel();
					this.items[i].qtyObject.qty = this.items[i].quantity;
					this.items[i].qtyObject.qtyDisplay = this.items[
						i
					].qtyObject.display();
					this.isEmpty = this.items.length;
					if (this.isEmpty > 0) {
						this.pertotalan.totalPrice = cartList.data.total_price;
						this.pertotalan.totalItem = cartList.data.total_item;
						for (
							let index = 0;
							index < this.items.length;
							index++
						) {
							const element: CartListElement = this.items[index];
							this.pertotalan.totalFee += element.admin_fee;
							this.pertotalan.ppn +=
								(this.company.ppn_percentage / 100) *
								cartList.data.total_price;
							this.pertotalan.ppn3 +=
								(this.company.pph_percentage / 100) *
								element.admin_fee;
							this.pertotalan.ongkir += element.shipping_cost;
						}
						this.pertotalan.subtotal =
							cartList.data.total_price +
							this.pertotalan.totalFee;
						this.pertotalan.grandtotal =
							this.pertotalan.subtotal +
							this.pertotalan.ppn +
							this.pertotalan.ppn3 +
							this.pertotalan.ongkir;
					}
				}
			});

		this.subsribers.push(sub);
	}

	pilihSemuaEventHandler(pilihSemuaStatus) {
		if (pilihSemuaStatus) {
			pilihSemuaStatus = false;
			for (var index in this.items) {
				var item = this.items[index];

				item.selected = false;
			}
		} else {
			pilihSemuaStatus = true;
			for (var index in this.items) {
				var item = this.items[index];
				if (!item.outOfStock) {
					item.selected = true;
				}
			}
		}
	}

	adaItemDipilih() {
		var adaItemChecked = false;
		for (var index in this.items) {
			var item = this.items[index];

			if (item.selected == true) {
				adaItemChecked = true;
			}
		}

		return adaItemChecked;
	}
}
