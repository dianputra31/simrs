import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApprovalUrl } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import {
	CartListParams,
	CheckoutCartParams,
	ConvertCheckoutParams,
} from '../../../../models/checkout-cart-params.model';
import {
	CheckoutCart,
	ConvertCheckoutCart,
	Product,
} from '../../../../models/checkout-cart.model';
import { Company, ConvertCompany } from '../../../../models/company.model';
import { PopUpDialogComponent } from '../../../../shared/components/pop-up-dialog/pop-up-dialog.component';
import { SuccessDialogComponent } from '../../components/success-dialog/success-dialog.component';

export let browserRefresh = false;

@Component({
	selector: 'request-approval-layout',
	templateUrl: './request-approval-layout.component.html',
	styleUrls: ['./request-approval-layout.component.scss'],
})
export class RequestApprovalLayoutComponent implements OnInit {
	subsribers: Subscription[];
	checkoutCart: CheckoutCart;
	items: Product[];
	selectedItems: Product[] = [];
	company: Company = null;
	pertotalan = {
		saldo: 1,
		totalPrice: 1,
		totalItem: 1,
		totalFee: 1,
		ppn: 1,
		ppn3: 1,
		ongkir: 1,
		subtotal: 1,
		grandtotal: 1,
	};

	constructor(
		public dialog: MatDialog,
		private route: ActivatedRoute,
		private router: Router,
		location: PlatformLocation,
		private service: BaseService
	) {
		history.pushState(null, null, window.location.href);

		location.onPopState(() => {
			history.pushState(null, null, window.location.pathname);
			this.openDialogLocation('./cart');
		});
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
		};

		const modalDialog = this.dialog.open(
			PopUpDialogComponent,
			dialogConfig
		);
		modalDialog.afterClosed().subscribe((data) => {
			if (data == 'ok') {
				this.router.navigate(['./cart']);
			} else if (data == 'cancel') {
				history.pushState(null, null, window.location.href);
			}
		});

		return false;
	}

	ngOnInit(): void {
		this.subsribers = [];
		this.checkoutCart = ConvertCheckoutCart.toCheckoutCart(
			localStorage.getItem('checkout-cart')
		);
		console.log(this.checkoutCart);
		var ls = localStorage.getItem('company');
		this.company = ConvertCompany.toCompany(ls);
		this.items = this.checkoutCart.data.products;
		this.pertotalan.totalPrice = this.checkoutCart.data.summary.purchase_amount;
		this.pertotalan.totalFee = this.checkoutCart.data.summary.admin_fee;
		this.pertotalan.subtotal = this.checkoutCart.data.summary.sub_total;
		this.pertotalan.ppn = this.checkoutCart.data.summary.ppn;
		this.pertotalan.ppn3 = this.checkoutCart.data.summary.pph;
		this.pertotalan.ongkir = this.checkoutCart.data.summary.shipping_cost;
		this.pertotalan.grandtotal = this.checkoutCart.data.summary.grand_total;
		this.pertotalan.saldo = this.company.credit_rp;

		for (let index = 0; index < this.items.length; index++) {
			const element: Product = this.items[index];
			if (element.status == 'OK' || element.status == 'UNBUYABLE') {
				this.selectedItems.push(element);
			}
		}
	}
	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe);
	}

	selanjutnyaClick() {
		if (this.selectedItems.length > 0) {
			this.proses();
		} else {
			alert('Maaf tidak ada produk yang tersedia');
		}
	}

	proses() {
		const cart_list: CartListParams[] = [];

		for (let index = 0; index < this.selectedItems.length; index++) {
			const element: Product = this.selectedItems[index];
			const cart = new CartListParams();
			cart.product_id = element.product_id;
			cart.quantity = element.quantity;
			cart_list.push(cart);
		}
		const params: CheckoutCartParams = {
			cart_list: cart_list,
		};
		var pm: String = ConvertCheckoutParams.checkoutCartParamsToJson(params);

		const sub = this.service
			.postData(ApprovalUrl, pm, false, false, true)
			.subscribe((resp) => {
				console.log(resp);
				const stringnya = ConvertCheckoutCart.checkoutCartToJson(resp);
				const cartCheckout: CheckoutCart = ConvertCheckoutCart.toCheckoutCart(
					stringnya
				);
				if (cartCheckout.status.rc == 1) {
					this.openSuccessDialog();
				} else {
				}
			});

		this.subsribers.push(sub);
	}

	openSuccessDialog() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = 'auto';
		dialogConfig.width = '477px';
		dialogConfig.height = '155px';
		dialogConfig.panelClass = 'border-radius:20px';
		dialogConfig.data = {};

		const modalDialog = this.dialog.open(
			SuccessDialogComponent,
			dialogConfig
		);

		modalDialog.afterClosed().subscribe((data) => {
			if (data == 'ok') {
				this.router.navigate(['./cart']);
			} else if (data == 'cancel') {
				history.pushState(null, null, window.location.href);
			}
		});

		return false;
	}
}
