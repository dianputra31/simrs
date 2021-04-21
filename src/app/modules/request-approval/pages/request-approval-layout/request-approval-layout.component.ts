import { PlatformLocation } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import { ApprovalUrl, ProfileUrl, RESPONSE } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { StorageService } from '../../../../core/storage/service/storage.service';
import { Product } from '../../../../models/checkout-cart.model';
import { Company, ConvertCompany } from '../../../../models/company.model';
import { PopUpDialogComponent } from '../../../../shared/components/pop-up-dialog/pop-up-dialog.component';
import { SuccessDialogComponent } from '../../components/success-dialog/success-dialog.component';
import { REQUEST_APPROVAL_STATUS_DICT } from '../../request-approval.constant';

export let browserRefresh = false;

@Component({
	selector: 'request-approval-layout',
	templateUrl: './request-approval-layout.component.html',
	styleUrls: ['./request-approval-layout.component.scss'],
})
export class RequestApprovalLayoutComponent implements OnInit {
	subsribers: Subscription[] = [];
	@BlockUI() blockUI: NgBlockUI;

	items: any[];

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

	fullname;
	addressData;

	topFixed;
	headers;
	innerHeight;
	leftContainerHeight;
	rightContainerHeight;
	constructor(
		public dialog: MatDialog,
		private storageService: StorageService,
		private router: Router,
		location: PlatformLocation,
		private service: HttpService
	) {
		history.pushState(null, null, window.location.href);

		location.onPopState(() => {
			history.pushState(null, null, window.location.pathname);
			this.openDialogLocation('./cart');
		});
	}

	ngOnInit(): void {
		var checkedOutCart = JSON.parse(localStorage.getItem('checkout-cart'))
			.data;

		var ls = localStorage.getItem('company');
		this.company = ConvertCompany.toCompany(ls);

		this.items = checkedOutCart.products;
		this.pertotalan.totalPrice = checkedOutCart.summary.purchase_amount;
		this.pertotalan.totalFee = checkedOutCart.summary.admin_fee;
		this.pertotalan.subtotal = checkedOutCart.summary.sub_total;
		this.pertotalan.ppn = checkedOutCart.summary.ppn;
		this.pertotalan.ppn3 = checkedOutCart.summary.pph;
		this.pertotalan.ongkir = checkedOutCart.summary.shipping_cost;
		this.pertotalan.grandtotal = checkedOutCart.summary.grand_total;
		this.pertotalan.saldo = this.company.credit_rp;

		const body = document.getElementsByTagName('body')[0];
		body.classList.add('no-scroll');

		this.getAddress();
	}

	selanjutnyaClick() {
		if (this.getOkItems().length > 0) {
			this.proses();
		} else {
			// this.service.showAlert('Maaf tidak ada produk yang tersedia');
		}
	}

	getOkItems(): any[] {
		return this.items.filter(
			(item) => item.status == REQUEST_APPROVAL_STATUS_DICT.OK
		);
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

	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe);

		const body = document.getElementsByTagName('body')[0];
		body.classList.remove('no-scroll');
	}

	proses() {
		var okItems = this.getOkItems();
		const cart_list: any[] = [];

		okItems.forEach((item) => {
			const element: Product = item;
			const cart = {
				product_id: 0,
				quantity: 0,
			};
			cart.product_id = element.product_id;
			cart.quantity = element.quantity;
			cart_list.push(cart);
		});

		const params = {
			cart_list: cart_list,
		};

		const sub = this.service.post(ApprovalUrl, params).subscribe((resp) => {
			console.log(resp);
			if (resp.status.rc == RESPONSE.SUCCESS) {
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

	initScrolling() {
		this.topFixed = document?.getElementById('top-fixed')?.offsetHeight;
		this.headers = document?.getElementById('headers')?.offsetHeight;

		this.onResize();
	}

	@HostListener('window:resize', ['$event'])
	onResize() {
		this.innerHeight = window.innerHeight;

		this.leftContainerHeight =
			this.innerHeight - this.topFixed - this.headers;
	}

	getAddress() {
		this.fullname = this.storageService.getName();
		this.blockUI.start();
		const sub = this.service.get(ProfileUrl).subscribe((resp) => {
			this.addressData = resp.data.delivery_address;

			this.blockUI.stop();
			setTimeout(() => {
				this.initScrolling();
			}, 1000);
		});

		this.subsribers.push(sub);
	}
}
