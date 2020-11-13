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
import { ToastService } from '../../../../shared/toast/toast-service';
import { ITEM_AVAILABILITY } from '../../cart.constant';

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
		public toastService: ToastService,
		private _redirectparam: RedirectParameterService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.subscribers = [];
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
					console.log(resp);
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

	deleteItem(dangerTpl, item: CartListItemModel) {
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
					this.showDanger(dangerTpl);
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

	showDanger(dangerTpl) {
		this.toastService.removeAll();
		this.toastService.show(dangerTpl, {
			delay: 15000,
			classname: 'bawah-tengah',
		});
	}

	carisejenis(item: any) {
		const a: any = item.product_name;
		this._redirectparam.namaproduk = a;
		this.router.navigate([
			`./pilih-produk/${item.category_id}/${item.subcategory_id}/` +
				a.replaceAll('/', '-'),
		]);
	}

	itemClicked() {
		this.router.navigate([
			'./detail-product/' + this.item.partner_sku_item,
		]);
	}
}
