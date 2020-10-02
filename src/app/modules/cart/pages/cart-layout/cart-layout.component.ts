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
	items: CartListElement[] = [];
	itemsoriginal: CartListElement[];
	constructor(private route: ActivatedRoute, private service: BaseService) { }
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
				this.itemsoriginal = cartList.data.cart_list;
				this.isEmpty = this.itemsoriginal.length;
				if (this.isEmpty > 0) {
					for (let index = 0; index < this.itemsoriginal.length; index++) {
						const element: CartListElement = this.itemsoriginal[index];
						console.log((element.stock == null || element.stock == 0));
						element.outOfStock = (element.stock - element.quantity) < 0;
						element.selected = (element.stock != 0 || element.stock != null);
						element.qtyObject = new QuantityModel();
						element.qtyObject.qty = element.quantity;
						element.qtyObject.qtyDisplay = element.qtyObject.display();
						this.items.push(element);
						this.pertotalan.totalFee += element.admin_fee;
						this.pertotalan.ppn += this.company.ppn_percentage;
						this.pertotalan.ppn3 += this.company.pph_percentage;
						this.pertotalan.ongkir += element.shipping_cost;
						this.pertotalan.totalPrice += element.sell_price;
						this.pertotalan.totalItem += 1;
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
			});

		this.subsribers.push(sub);
	}

	pilihSemuaEventHandler(pilihSemuaStatus) {
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
		if (pilihSemuaStatus) {
			this.pertotalan.totalPrice = 0;
			this.pertotalan.totalItem = 0;
			pilihSemuaStatus = false;
			for (var index in this.items) {
				const element: CartListElement = this.items[index];
				element.outOfStock = (element.stock - element.quantity) < 0;
				element.selected = false;
				this.pertotalan.totalFee += 0;
				this.pertotalan.ppn += 0;
				this.pertotalan.ppn3 += 0;
				this.pertotalan.ongkir += 0;
			}
			this.pertotalan.subtotal = 0;
			this.pertotalan.grandtotal = 0;
		} else {
			pilihSemuaStatus = true;
			this.pertotalan.totalPrice = 0;
			this.pertotalan.totalItem = 0;
			for (var index in this.items) {
				const element: CartListElement = this.items[index];

				element.outOfStock = (element.stock - element.quantity) < 0;
				element.selected = true;
				this.pertotalan.totalFee += element.admin_fee;
				this.pertotalan.ppn += this.company.ppn_percentage;
				this.pertotalan.ppn3 += this.company.pph_percentage;
				this.pertotalan.ongkir += element.shipping_cost;
				this.pertotalan.totalPrice += element.sell_price;
				this.pertotalan.totalItem += 1;
			}
			this.pertotalan.subtotal = this.pertotalan.totalPrice + this.pertotalan.totalFee;
			this.pertotalan.grandtotal = this.pertotalan.subtotal + this.pertotalan.ppn + this.pertotalan.ppn3 + this.pertotalan.ongkir;
		}
	}

	adaItemDipilih() {
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
		var adaItemChecked = false;
		this.pertotalan.totalPrice = 0;
		this.pertotalan.totalItem = 0;
		for (var index in this.items) {

			const element: CartListElement = this.items[index];
			element.outOfStock = (element.stock - element.quantity) < 0;
			element.selected = element.stock != 0;
			this.pertotalan.totalFee += element.admin_fee;
			this.pertotalan.ppn += this.company.ppn_percentage;
			this.pertotalan.ppn3 += this.company.pph_percentage;
			this.pertotalan.ongkir += element.shipping_cost;
			this.pertotalan.totalPrice += element.sell_price;
			this.pertotalan.totalItem += 1;

			if (element.selected == true) {
				adaItemChecked = true;
			}
		}
		this.pertotalan.subtotal = this.pertotalan.totalPrice + this.pertotalan.totalFee;
		this.pertotalan.grandtotal = this.pertotalan.subtotal + this.pertotalan.ppn + this.pertotalan.ppn3 + this.pertotalan.ongkir;

		return adaItemChecked;
	}
}
