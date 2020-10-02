import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CheckoutCart, ConvertCheckoutCart, Product } from '../../../../models/checkout-cart.model';
import { Company, ConvertCompany } from '../../../../models/company.model';
import { PopUpDialogComponent } from '../../../../shared/components/pop-up-dialog/pop-up-dialog.component';

export let browserRefresh = false;

@Component({
	selector: 'request-approval-layout',
	templateUrl: './request-approval-layout.component.html',
	styleUrls: ['./request-approval-layout.component.scss'],
})
export class RequestApprovalLayoutComponent implements OnInit {
	subscription: Subscription;
	checkoutCart: CheckoutCart;
	items: Product[];
	selectedItems: Product[] = []
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
		location: PlatformLocation
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
		this.checkoutCart = ConvertCheckoutCart.toCheckoutCart(localStorage.getItem("checkout-cart"));
		var ls = localStorage.getItem('company');
		this.company = ConvertCompany.toCompany(ls);
		this.items = this.checkoutCart.data.products
		this.pertotalan.totalPrice = this.checkoutCart.data.summary.purchase_amount;
		this.pertotalan.totalFee = this.checkoutCart.data.summary.admin_fee;
		this.pertotalan.subtotal = this.checkoutCart.data.summary.sub_total;
		this.pertotalan.ppn = this.checkoutCart.data.summary.ppn;
		this.pertotalan.ppn3 = this.checkoutCart.data.summary.pph;
		this.pertotalan.ongkir = this.checkoutCart.data.summary.shipping_cost;
		this.pertotalan.grandtotal = this.checkoutCart.data.summary.grand_total;
		this.pertotalan.saldo = this.company.credit_rp;
	}
}
