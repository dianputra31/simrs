import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApprovalUrl, CheckoutCartUrl } from '../../../app.constant';
import { BaseService } from '../../../core/base-service/service/base.service';
import { CartListElement } from '../../../models/cart-list.model';
import {
	CartListParams,
	CheckoutCartParams,
	ConvertCheckoutParams,
} from '../../../models/checkout-cart-params.model';
import {
	CheckoutCart,
	ConvertCheckoutCart,
} from '../../../models/checkout-cart.model';
import { ApprovalConfirmationDialogComponent } from '../../../modules/approval/components/approval-confirmation-dialog/approval-confirmation-dialog.component';
import { PopUpRequestApprovalComponent } from '../../../shared/components/pop-up-request-approval/pop-up-request-approval.component';

@Component({
	selector: 'box-cart-price',
	templateUrl: './box-cart-price.component.html',
	styleUrls: ['./box-cart-price.component.scss'],
})
export class BoxCartPriceComponent implements OnInit {
	@Input() buttonLabel: string;
	@Input() buttonDisable: boolean = true;
	@Input() pertotalan: any;
	@Input() selectedItems: CartListElement[];
	@Output() buttonBoxCartPriceClick = new EventEmitter();
	subsribers: Subscription[];

	constructor(
		public dialog: MatDialog,
		private route: ActivatedRoute,
		private router: Router,
		private service: BaseService
	) {}

	ngOnInit(): void {}

	postCartItem(type: String) {
		var cart_list: CartListParams[] = [];

		for (let index = 0; index < this.selectedItems.length; index++) {
			const element: CartListElement = this.selectedItems[index];
			var cart = new CartListParams();
			cart.product_id = element.product_id;
			cart.quantity = element.quantity;
			cart_list.push(cart);
		}
		const params: CheckoutCartParams = {
			cart_list: cart_list,
		};
		var pm: String = ConvertCheckoutParams.checkoutCartParamsToJson(params);
		var url = '';
		if (type == 'selanjutnya') {
			url = CheckoutCartUrl;
		} else if (type == 'req-approval') {
			url = ApprovalUrl;
		}
		const sub = this.service
			.postData(url, pm, false, false, true)
			.subscribe((resp) => {
				const stringnya = ConvertCheckoutCart.checkoutCartToJson(resp);
				const cartCheckout: CheckoutCart = ConvertCheckoutCart.toCheckoutCart(
					stringnya
				);
				if (cartCheckout.status.rc == 1) {
					if (type == 'selanjutnya') {
						localStorage.setItem('checkout-cart', stringnya);
						this.router.navigate(['./request-approval']);
					} else if (type == 'req-approval') {
						this.router.navigate(['./cart']);
					}
				} else {
				}
			});

		this.subsribers.push(sub);
	}

	openDialogLocation(des) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = 'auto';
		dialogConfig.width = '477px';
		dialogConfig.height = '155px';
		dialogConfig.panelClass = 'border-radius:20px';
		dialogConfig.data = {
			pageBefore: this.router.url,
			pageDestination: des,
			modePopUp: '1',
		};
		const modalDialog = this.dialog.open(
			PopUpRequestApprovalComponent,
			dialogConfig
		);
	}

	openConfirmDialog(des) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = 'auto';
		dialogConfig.width = '480px';
		dialogConfig.height = '170px';
		dialogConfig.panelClass = 'border-radius:10px';
		dialogConfig.data = {
			pageBefore: this.router.url,
			pageDestination: des,
			modePopUp: '1',
		};
		const modalDialog = this.dialog.open(
			ApprovalConfirmationDialogComponent,
			dialogConfig
		);
		return false;
	}

	clickButtonLabel() {
		this.buttonBoxCartPriceClick.emit();
		if (this.buttonDisable) {
			if (this.buttonLabel == 'Selanjutnya') {
				this.subsribers = [];
				this.route.paramMap.subscribe((params) => {
					this.postCartItem('selanjutnya');
				});
			} else if (this.buttonLabel == 'Request Approval') {
				// this.openDialogLocation('./cart');
				if (this.selectedItems.length > 0) {
					this.postCartItem('req-approval');
				} else {
					alert('Maaf tidak ada produk yang tersedia');
				}
			} else if (this.buttonLabel == 'Proses') {
				this.openConfirmDialog('./approval');
			}
		}
	}
}
