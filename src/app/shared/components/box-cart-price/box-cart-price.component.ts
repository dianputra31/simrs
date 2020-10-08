import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApprovalUrl, ApproveUrl } from '../../../app.constant';
import { BaseService } from '../../../core/base-service/service/base.service';
import { StorageService } from '../../../core/storage/service/storage.service';
import { CartListElement } from '../../../models/cart-list.model';
import {
	ApproveCartParams,
	CartListApproveParams,
	CartListParams,
	CheckoutCartParams,
	ConvertApproveParams,
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
		} else {
			const cart_list: CartListParams[] = [];

			for (let index = 0; index < this.selectedItems.length; index++) {
				const element: CartListElement = this.selectedItems[index];
				const cart = new CartListParams();
				cart.product_id = element.product_id;
				cart.quantity = element.quantity;
				cart_list.push(cart);
			}
			const params: CheckoutCartParams = {
				cart_list: cart_list,
			};
			var pm: String = ConvertCheckoutParams.checkoutCartParamsToJson(
				params
			);
		}
		var url = '';
		if (type == 'req-approval') {
			url = ApprovalUrl;
		} else if (type == 'proses') {
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
					if (type == 'req-approval') {
						this.openDialogLocation('./cart');
					} else if (type == 'proses') {
						this.router.navigate(['./approval']);
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
		modalDialog.afterClosed().subscribe((result) => {
			if (result.event == 'proses') {
			}
		});
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
			cartList: this.selectedItems,
		};
		const modalDialog = this.dialog.open(
			ApprovalConfirmationDialogComponent,
			dialogConfig
		);

		modalDialog.afterClosed().subscribe((result) => {
			if (result.event == 'proses') {
				this.postCartItem('proses');
			}
		});
		return false;
	}

	clickButtonLabel() {
		this.buttonBoxCartPriceClick.emit();
		if (this.buttonDisable) {
			if (this.buttonLabel == 'Selanjutnya123') {
				this.subsribers = [];
				this.route.paramMap.subscribe((params) => {
					this.postCartItem('selanjutnya');
				});
			} else if (this.buttonLabel == 'Request Approval') {
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
