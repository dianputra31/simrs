import { DOCUMENT } from '@angular/common';
import {
	Component,
	HostListener,
	Inject,
	OnInit,
	ViewChild
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import {
	AddressListUrl,
	ApprovalCount,
	ApprovalListUrl,
	ApproveUrl,
	GetCompanyUsers,
	RESPONSE
} from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { StorageService } from '../../../../core/storage/service/storage.service';
import { Product } from '../../../../models/Approval.model';
import { CartListItemModel } from '../../../../models/cart-list-item.model';
import {
	ApproveCartParams,
	CartListApproveParams,
	ConvertApproveParams
} from '../../../../models/checkout-cart-params.model';
import {
	CheckoutCart,
	ConvertCheckoutCart
} from '../../../../models/checkout-cart.model';
import { FilterInputComponent } from '../../../../shared/components/filter-input/filter-input.component';
import { ApprovalConfirmationDialogComponent } from '../../components/approval-confirmation-dialog/approval-confirmation-dialog.component';
import { ApprovalResultConfirmationDialogComponent } from '../../components/approval-result-confirmation-dialog/approval-result-confirmation-dialog.component';
import { FilterDateComponent } from '../../components/filter-date/filter-date.component';

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
	listSummaryByAddress: any[] = [];
	selectedAddress: any;

	purchasers: any[];
	selectedPurchaser: any;

	keyword;
	start_date;
	end_date;

	innerHeight: any;
	leftContainerHeight: any;
	rightContainerHeight: any;
	topFixed: any;
	headers: any;

	@ViewChild('inputKeyword') inputKeyword: FilterInputComponent;
	@ViewChild('inputDate') inputDate: FilterDateComponent;

	constructor(
		private storageService: StorageService,
		public dialog: MatDialog,
		public service: BaseService,
		public http: HttpService
	) {}

	ngOnInit(): void {
		this.getAddress();
		this.numberOfApproval();

		const body = document.getElementsByTagName('body')[0];
		body.classList.add('no-scroll');
	}

	getItems() {
		var params: any = {
			address_id: this.selectedAddress?.address_id,
			keyword: this.keyword,
			start_date: this.start_date,
			end_date: this.end_date,
			// page: 1,
			// limit: 1000,
		};

		if (this.selectedPurchaser.id) {
			params.user_id = this.selectedPurchaser.id;
		}

		this.blockUI.start();
		this.http.post(ApprovalListUrl, params).subscribe((resp) => {
			this.blockUI.stop();

			if (resp.status.rc === RESPONSE.SUCCESS) {
				this.items = resp.data;

				this.items.forEach((each) => {
					each.selected = this.enableSelect(each.availability);
					each.enableSelection = this.enableSelect(each.availability);
				});

				this.initScrolling();
			} else {
				alert(resp.status.msg);
			}
		});
	}

	ngOnDestroy() {
		this.subscribers.forEach((each) => each.unsubscribe);

		const body = document.getElementsByTagName('body')[0];
		body.classList.remove('no-scroll');
	}

	getAddress() {
		this.blockUI.start();

		const sub = this.http.get(AddressListUrl).subscribe((resp) => {
			this.blockUI.stop();
			if (resp.status.rc === RESPONSE.SUCCESS) {
				//push address with request_total is no 0 to new array
				resp.data.forEach((element) => {
					if (element.request_total != 0) {
						this.listSummaryByAddress.push(element);
					}
				});

				if (this.listSummaryByAddress.length != 0) {
					this.selectedAddress = this.listSummaryByAddress[0];
					this.getPurchaserList();
				}
			} else {
				alert(resp.status.msg);
			}
		});

		this.subscribers.push(sub);
	}

	numberOfApproval() {
		this.blockUI.start();
		const sub = this.http.post(ApprovalCount, {}).subscribe((resp) => {
			this.blockUI.stop();
			if (resp.status.rc === RESPONSE.SUCCESS) {
				this.nNotApproved = resp.data.approval_count;
			} else {
				alert(resp.status.msg);
			}
		});
		this.subscribers.push(sub);
	}

	getPurchaserList() {
		this.blockUI.start();
		const sub = this.http.get(GetCompanyUsers).subscribe((resp) => {
			if (resp.status.rc === RESPONSE.SUCCESS) {
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
				this.getItems();
			} else {
				alert(resp.status.msg);
			}
		});

		this.subscribers.push(sub);
	}

	selectAddressGroup(i) {
		this.selectedAddress = i;
		this.getItems();
	}

	selectPurchaser(purchaser) {
		this.selectedPurchaser = purchaser;
		this.getItems();
	}

	cariKeyword(keyword) {
		if (keyword.length >= 3 || keyword.length == 0) {
			this.keyword = keyword;
			this.getItems();
		}
	}

	filterDate(datenya) {
		this.start_date = datenya.startdate;
		this.end_date = datenya.enddate;

		this.getItems();
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
		this.blockUI.start();
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
				this.blockUI.stop();
				const stringnya = ConvertCheckoutCart.checkoutCartToJson(resp);
				const cartCheckout: CheckoutCart = ConvertCheckoutCart.toCheckoutCart(
					stringnya
				);
				if (cartCheckout.status.rc == 1) {
					this.openDialogLocation();
				} else {
					this.service.showAlert(cartCheckout.status.msg);
					// alert(cartCheckout.status.msg);
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

	reset() {
		this.selectedAddress = this.listSummaryByAddress[0];
		this.selectedPurchaser = this.purchasers[0];
		this.keyword = '';

		this.inputKeyword.getKeyword('');

		this.inputDate.resetDate();
		this.start_date = '';
		this.end_date = '';

		this.getItems();
	}

	rejectItem() { 
		this.getItems();
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

		this.rightContainerHeight =
			this.innerHeight - this.topFixed - this.headers;
	}
}
