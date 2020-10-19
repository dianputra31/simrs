import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
	AddressListUrl,
	ApprovalCount,
	ApprovalListUrl,
	ApproveUrl,
	GetCompanyUsers,
} from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { StorageService } from '../../../../core/storage/service/storage.service';
import { Product } from '../../../../models/Approval.model';
import { CartListItemModel } from '../../../../models/cart-list-item.model';
import {
	ApproveCartParams,
	CartListApproveParams,
	ConvertApproveParams,
} from '../../../../models/checkout-cart-params.model';
import {
	CheckoutCart,
	ConvertCheckoutCart,
} from '../../../../models/checkout-cart.model';
import { ApprovalResultConfirmationDialogComponent } from '../../../approval/components/approval-result-confirmation-dialog/approval-result-confirmation-dialog.component';
import { ApprovalConfirmationDialogComponent } from '../../components/approval-confirmation-dialog/approval-confirmation-dialog.component';

@Component({
	selector: 'approval-layout',
	templateUrl: './approval-layout.component.html',
	styleUrls: ['./approval-layout.component.scss'],
})
export class ApprovalLayoutComponent implements OnInit {
	@Inject(DOCUMENT) private _document: Document;
	@BlockUI() blockUI: NgBlockUI;
	subscribers: Subscription[] = [];

	items: any[];

	nNotApproved: number;
	listSummaryByAddress: any[];
	selectedAddress: any;

	purchasers: any[];
	selectedPurchaser: any[];
	constructor(
		private http: HttpClient,
		private storageService: StorageService,
		public dialog: MatDialog,
		public service: BaseService
	) {}

	ngOnInit(): void {
		this.getAddress();
		this.numberOfApproval();
		this.getPurchaserList();
	}

	getItems() {
		var params = {
			address_id: this.selectedAddress?.address_id,
			// keyword: this.filter,
			// page: 1,
			// limit: 1000,
			// user_id: this.selectedUserId,
		};
		this.blockUI.start();
		this.http
			.post(ApprovalListUrl, params)
			.pipe(
				map((resp: any): any => {
					return resp;
				}),
				catchError((err, caught: Observable<HttpEvent<any>>) => {
					if (err instanceof HttpErrorResponse && err.status == 401) {
						this.storageService.clear();
						this._document.defaultView.location.reload();
						return of(err as any);
					}
					throw err;
				})
			)
			.subscribe((resp) => {
				this.blockUI.stop();
				this.items = resp.data;

				this.items.forEach((each) => {
					each.selected = this.enableSelect(each.availability);
					each.enableSelection = this.enableSelect(each.availability);
				});

				this.blockUI.stop();
			});
	}

	ngOnDestroy() {
		this.subscribers.forEach((each) => each.unsubscribe);
	}

	getAddress() {
		this.blockUI.start();
		const sub = this.http
			.get(AddressListUrl)
			.pipe(
				map((resp: any): any => {
					return resp;
				}),
				catchError((err, caught: Observable<HttpEvent<any>>) => {
					if (err instanceof HttpErrorResponse && err.status == 401) {
						this.storageService.clear();
						this._document.defaultView.location.reload();
						return of(err as any);
					}
					throw err;
				})
			)
			.subscribe((resp) => {
				this.blockUI.stop();
				this.listSummaryByAddress = resp.data;
				this.selectedAddress = resp.data[0];
				this.getItems();
			});

		this.subscribers.push(sub);
	}

	numberOfApproval() {
		this.blockUI.start();
		const sub = this.http
			.post(ApprovalCount, {})

			.pipe(
				map((resp: any): any => {
					return resp;
				}),
				catchError((err, caught: Observable<HttpEvent<any>>) => {
					if (err instanceof HttpErrorResponse && err.status == 401) {
						this.storageService.clear();
						this._document.defaultView.location.reload();
						return of(err as any);
					}
					throw err;
				})
			)
			.subscribe((resp) => {
				this.blockUI.stop();
				this.nNotApproved = resp.data.approval_count;
			});
		this.subscribers.push(sub);
	}

	getPurchaserList() {
		this.blockUI.start();
		const sub = this.http
			.get(GetCompanyUsers)
			.pipe(
				map((resp: any): any => {
					return resp;
				}),
				catchError((err, caught: Observable<HttpEvent<any>>) => {
					if (err instanceof HttpErrorResponse && err.status == 401) {
						this.storageService.clear();
						this._document.defaultView.location.reload();
						return of(err as any);
					}
					throw err;
				})
			)
			.subscribe((resp) => {
				this.blockUI.stop();
				this.purchasers = resp.data;

				const x = {
					fullname: 'Semua',
					id: '',
				};

				this.purchasers.splice(0, 0, x);

				this.purchasers.forEach((each) => {
					each.label = each.fullname;
				});

				this.selectedPurchaser = this.purchasers[0];
			});

		this.subscribers.push(sub);
	}

	selectAddressGroup(i) {
		this.selectedAddress = i;
		this.getItems();
	}

	selectPurchaser(purchaser) {
		this.selectPurchaser = purchaser;
	}

	cariKeyword(keyword) {
		console.log(keyword);
	}

	filterDate(datenya) {
		console.log(datenya);
		// this.date = datenya;
		// const addressid = this.selectedAddress.address_id;
		// this.getCartItem(addressid);
	}

	calculate() {
		var pertotalan = {
			totalPrice: 0,
			totalItem: 0,
			totalFee: 0,
			ppn: 0,
			ppn3: 0,
			ongkir: 0,
			subtotal: 0,
			grandtotal: 0,
		};
		// pertotalan.saldo = this.company.credit_rp;
		pertotalan.totalPrice = 0;
		pertotalan.totalItem = 0;
		for (var index in this.items) {
			if (this.items[index].selected) {
				const element: CartListItemModel = this.items[index];

				pertotalan.totalFee +=
					element.stock - element.quantity < 0
						? 0
						: element.admin_fee;
				pertotalan.ppn +=
					element.stock - element.quantity < 0 ? 0 : element.ppn;
				pertotalan.ppn3 +=
					element.stock - element.quantity < 0 ? 0 : element.pph;
				pertotalan.ongkir +=
					element.stock - element.quantity < 0
						? 0
						: element.shipping_cost;
				pertotalan.totalPrice +=
					element.stock - element.quantity < 0
						? 0
						: element.purchase_amount;
				pertotalan.totalItem +=
					element.stock - element.quantity < 0 ? 0 : 1;
			}
			pertotalan.subtotal = pertotalan.totalPrice + pertotalan.totalFee;
			pertotalan.grandtotal =
				pertotalan.subtotal +
				pertotalan.ppn +
				pertotalan.ppn3 +
				pertotalan.ongkir;
		}

		return pertotalan;
	}

	selanjutnyaClick() {
		this.openConfirmDialog();
	}

	openConfirmDialog() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = 'auto';
		dialogConfig.width = '480px';
		dialogConfig.height = '170px';
		dialogConfig.panelClass = 'border-radius:10px';
		dialogConfig.data = {
			modePopUp: '1',
			cartList: this.selectedItems(),
		};
		const modalDialog = this.dialog.open(
			ApprovalConfirmationDialogComponent,
			dialogConfig
		);

		modalDialog.afterClosed().subscribe((result) => {
			if (result == 'proses') {
				this.proses();
			}
		});
		return false;
	}
	public enableSelect(availability) {
		if (availability == 'AVAILABLE') {
			return true;
		} else {
			return false;
		}
	}

	numberOfItemsSelected() {
		if (this.items) {
			return this.items.filter((x) => x.selected).length;
		} else {
			return 0;
		}
	}

	pilihSemuaClickEvent(pilihSemuaValue) {
		this.items.forEach((each) => {
			if (each.enableSelection) {
				each.selected = pilihSemuaValue;
			}
		});
	}

	selectedItems() {
		const a = [];
		this.items.filter((x) => {
			if (x.selected) {
				a.push(x);
			}
		});

		return a;
	}

	proses() {
		const cart_list: CartListApproveParams[] = [];

		const selectedItems = this.selectedItems();
		for (let index = 0; index < selectedItems.length; index++) {
			const element: Product = selectedItems[index];
			const cart = new CartListApproveParams();
			console.log(element);
			cart.cart_request_id = element.id;
			cart_list.push(cart);
		}
		const params: ApproveCartParams = {
			cart_list: cart_list,
			message: 'hahahahhatot',
		};

		var pm: String = ConvertApproveParams.approveCartParamsToJson(params);

		var url = ApproveUrl;
		if (this.storageService.getRole() != 'Manager') {
			pm = null;
		}

		const sub = this.service
			.postData(url, pm, false, false, true)
			.subscribe((resp) => {
				const stringnya = ConvertCheckoutCart.checkoutCartToJson(resp);
				const cartCheckout: CheckoutCart = ConvertCheckoutCart.toCheckoutCart(
					stringnya
				);
				if (cartCheckout.status.rc == 1) {
					this.openDialogLocation();
				} else {
				}
			});

		this.subscribers.push(sub);
	}

	openDialogLocation() {
		//processing data
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-result-confirmation';
		dialogConfig.height = 'auto';
		dialogConfig.width = '477px';
		dialogConfig.height = '155px';
		dialogConfig.panelClass = 'border-radius:20px';
		dialogConfig.data = {
			modePopUp: '1',
		};
		const modalDialog = this.dialog.open(
			ApprovalResultConfirmationDialogComponent,
			dialogConfig
		);

		return false;
	}
}
