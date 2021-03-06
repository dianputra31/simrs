import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApproveUrl } from '../../../app.constant';
import { BaseService } from '../../../core/base-service/service/base.service';
import { StorageService } from '../../../core/storage/service/storage.service';
import { CartListElement } from '../../../models/cart-list.model';
import {
	ApproveCartParams,
	CartListApproveParams,
	ConvertApproveParams
} from '../../../models/checkout-cart-params.model';
import {
	CheckoutCart,
	ConvertCheckoutCart
} from '../../../models/checkout-cart.model';

@Component({
	selector: 'box-cart-price',
	templateUrl: './box-cart-price.component.html',
	styleUrls: ['./box-cart-price.component.scss'],
})
export class BoxCartPriceComponent implements OnInit {
	@Input() buttonLabel: string;
	@Input() buttonDisable: boolean = true;
	@Input() buttonAvail: boolean = true;
	@Input() pertotalan: any;
	@Input() selectedItems: CartListElement[];
	// @Input() product: Product[] = [];
	@Output() buttonBoxCartPriceClick = new EventEmitter();
	subsribers: Subscription[];
	datacompany;

	constructor(
		public dialog: MatDialog,
		private route: ActivatedRoute,
		private router: Router,
		private service: BaseService,
		private storageService: StorageService
	) {}

	ngOnInit(): void {
		this.datacompany = JSON.parse(localStorage.getItem('company'));
	}

	postCartItem(type: String) {
		if (type == 'proses') {
			const cart_list: CartListApproveParams[] = [];

			for (let index = 0; index < this.selectedItems.length; index++) {
				const element: CartListElement = this.selectedItems[index];
				const cart = new CartListApproveParams();
				cart.cart_request_id = element.id;
				cart_list.push(cart);
			}
			const params: ApproveCartParams = {
				cart_list: cart_list,
				message: 'hahahahhatot',
			};

			var pm: String = ConvertApproveParams.approveCartParamsToJson(
				params
			);
		}
		var url = '';
		if (type == 'proses') {
			url = ApproveUrl;
			if (this.storageService.getRole() != 'Manager') {
				pm = null;
			}
		}
		const sub = this.service
			.postData(url, pm, false, false, true)
			.subscribe((resp) => {
				const stringnya = ConvertCheckoutCart.checkoutCartToJson(resp);
				const cartCheckout: CheckoutCart = ConvertCheckoutCart.toCheckoutCart(
					stringnya
				);
				if (cartCheckout.status.rc == 1) {
					if (type == 'proses') {
						this.router.navigate(['./approval']);
					}
				} else {
				}
			});

		this.subsribers.push(sub);
	}

	clickButtonLabel() {
		if (!this.buttonDisable) {
			this.buttonBoxCartPriceClick.emit();
			if (this.buttonLabel == 'Proses') {
				// this.openConfirmDialog('./approval');
			}
		}
	}
}
