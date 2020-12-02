import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import { AddCart, RESPONSE } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { RedirectParameterService } from '../../../../layout/redirect-parameter.service';
import { CartItemRequestModel } from '../../../../models/cart-item-request.model';
import { CartItemModel } from '../../../../models/cart-item.model';
import { CartListItemModel } from '../../../../models/cart-list-item.model';
import { ITEM_AVAILABILITY, ITEM_AVAILABILITY_DICT } from '../../cart.constant';

@Component({
	selector: 'item-card',
	templateUrl: './item-card.component.html',
	styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
	@Input() item: CartListItemModel;
	@Output() onUpdateQty = new EventEmitter();
	@Output() onDeleteItem = new EventEmitter();

	@BlockUI() blockUI: NgBlockUI;

	subscribers: Subscription[];
	constructor(
		public service: HttpService,
		public dialogService: BaseService,
		private _redirectparam: RedirectParameterService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.subscribers = [];
	}

	onCheckboxClicked(selected) {
		this.item.selected = selected;
	}

	ngOnDestroy() {
		this.subscribers.forEach((each) => each.unsubscribe);
	}

	handleClickCheckbox(checked) {
		this.item.selected = checked;
	}
	handleQtyUpdate(qty) {
		this.item.quantity = qty;
		// this.onUpdateQty.emit();
		this.updateItemCart();
	}

	onImgError(event) {
		event.target.src = '../../../../assets/image/icons/default-item.png';
	}

	getAvailabilityLabel() {
		var x = ITEM_AVAILABILITY.find(
			(s) => s.status == this.item.availability
		);
		return x?.display;
	}

	updateItemCart() {
		var test = new CartItemModel();
		test.product_id = this.item.product_id;
		test.quantity = this.item.quantity;

		var cartreq = new CartItemRequestModel();
		cartreq.cart_list = [];
		cartreq.cart_list.push(test);
		this.blockUI.start();
		const sub = this.service.post(AddCart, cartreq).subscribe(
			(resp) => {
				if (resp.status.rc == RESPONSE.SUCCESS) {
					this.blockUI.stop();
					this.onUpdateQty.emit(resp.data[0]);
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

	deleteItem(item: CartListItemModel) {
		var test = new CartItemModel();
		test.product_id = item.product_id;
		test.quantity = 0;

		var cartreq = new CartItemRequestModel();
		cartreq.cart_list = [];
		cartreq.cart_list.push(test);
		this.blockUI.start();
		const sub = this.service.post(AddCart, cartreq).subscribe(
			(resp) => {
				if (resp.status.rc == RESPONSE.SUCCESS) {
					this.blockUI.stop();
					this.onDeleteItem.emit();
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

	carisejenis(item: any) {
		const a: any = item.product_name;
		this._redirectparam.namaproduk = a;
		this.router.navigate([
			`./pilih-produk/${item.category_id}/${item.subcategory_id}/` +
				a.replaceAll('/', '-'),
		]);
	}

	isItemAvailable() {
		return (
			this.item.availability == ITEM_AVAILABILITY_DICT.AVAILABLE ||
			this.item.availability == ITEM_AVAILABILITY_DICT.LIMITED
		);
	}

	itemClicked() {
		this.router.navigate([
			'./detail-product/' + this.item.partner_sku_item,
		]);
	}
}
