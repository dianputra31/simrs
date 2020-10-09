import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartListUrl } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
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
	constructor(private service: BaseService) {}

	ngOnInit(): void {
		this.getCartItem();
	}

	ngOnDestroy() {
		this.subscribers.forEach((each) => each.unsubscribe);
	}

	getCartItem() {
		const sub = this.service
			.getData(CartListUrl, CartListResponseModel, null, false)
			.subscribe((resp) => {
				this.items = resp.cart_list;
				this.total_item = resp.total_item;
				this.total_price = resp.total_price;
			});

		this.subscribers.push(sub);
	}
}
