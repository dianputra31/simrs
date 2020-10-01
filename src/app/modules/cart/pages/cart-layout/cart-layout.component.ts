import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartListUrl } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { CartListElement, Convert } from '../../../../models/cart-list.model';

@Component({
	selector: 'cart-layout',
	templateUrl: './cart-layout.component.html',
	styleUrls: ['./cart-layout.component.scss'],
})
export class CartLayoutComponent implements OnInit {
	subsribers: Subscription[];
	items: CartListElement[];
	constructor(private route: ActivatedRoute, private service: BaseService) { }

	ngOnInit(): void {
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
