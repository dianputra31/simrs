import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
	ViewChild,
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import { AddCart, RESPONSE } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { RedirectParameterService } from '../../../../layout/redirect-parameter.service';
import { CartItemModel } from '../../../../models/cart-item.model';
import { TransactionItemResponseModel } from '../../../../models/transaction-item-response.model';
import { ToastService } from '../../../../shared/toast/toast-service';
import { PutInCartNotificationComponent } from '../../../../shared2/components/put-in-cart-notification/put-in-cart-notification.component';
import { ReceiptConfirmationComponent } from './../receipt-confirmation/receipt-confirmation.component';
// import { FilterInputComponent } from '../../../../shared/components/filter-input/filter-input.component'

@Component({
	selector: 'item-transaction',
	templateUrl: './item-transaction.component.html',
	styleUrls: ['./item-transaction.component.scss'],
})
export class ItemTransactionComponent implements OnInit {
	@Output() scrolledEvent = new EventEmitter<any>();
	@Input() items: TransactionItemResponseModel[];
	selector: string = '.container';
	page: number = 1;
	limit: number = 5;
	second;
	fourth;
	sixth;
	dangerTpl;
	item;
	selectedItem;

	notifItem;
	@BlockUI() blockUI: NgBlockUI;
	// items;
	// keyword;
	// filterservicesubscription;
	@ViewChild(PutInCartNotificationComponent, { static: false })
	notif: PutInCartNotificationComponent;

	filternya;

	// keywordSearch: FilterInputComponent = new FilterInputComponent()
	subsribers: Subscription[] = [];
	constructor(
		public dialog: MatDialog,
		private router: Router,
		private route: ActivatedRoute, // private filterservice: FilterInputComponent,
		private _redirectparam: RedirectParameterService,
		private service: BaseService,
		public toastService: ToastService,
		public http: HttpService
	) {}

	ngOnInit(): void {}

	getTrxHist() {
		// console.log("thisval in item-transaction: ", keyword)
		// this.filterservicesubscription = this.filterservice
	}

	openDialogLocation(des, item) {
		console.log(item);
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component-2';
		dialogConfig.width = '475px';
		dialogConfig.height = '180px';
		dialogConfig.panelClass = 'border-radius:10px';
		dialogConfig.data = {
			pageBefore: this.router.url,
			pageDestination: des,
			order_code: item.order_code,
			item_id: item.id,
		};

		const modalDialog = this.dialog.open(
			ReceiptConfirmationComponent,
			dialogConfig
		);

		return false;
	}

	selesai(item: TransactionItemResponseModel) {
		this.openDialogLocation(['./transaction'], item);
	}

	carilagi() {
		this.router.navigate(['./pilih-produk/0/0']);
	}

	ajukanlagi() {
		this.router.navigate(['./pilih-produk/0/0']);
	}

	carisejenis(item: TransactionItemResponseModel) {
		const a: any = item.product_name;
		this._redirectparam.namaproduk = a;
		this.router.navigate([
			`./pilih-produk/${item.category_id}/${item.subcategory_id}/` +
				a.replaceAll('/', '-'),
		]);
	}

	viewDetail(item: TransactionItemResponseModel) {
		this.router.navigate([
			`./transaction-detail/${item.order_code}/${item.id}`,
		]);
	}

	onImgError(event) {
		event.target.src = '../../../../assets/image/icons/default-item.png';
	}

	// belilagi(dangerTpl,item: TransactionItemResponseModel) {
	// 	this.router.navigate(['./pilih-produk/0/0']);
	// }

	belilagi(item: TransactionItemResponseModel) {
		this.notifItem = item;
		this.selectedItem = item;

		var test = new CartItemModel();
		test.product_id = item.id;
		test.quantity = item.quantity;

		console.log(test);
		var cartreq = {
			cart_list: [],
		};
		cartreq.cart_list = [];
		cartreq.cart_list.push(test);

		this.blockUI.start();
		const sub = this.http.post(AddCart, cartreq).subscribe(
			(resp) => {
				this.blockUI.stop();
				if (resp.status.rc == RESPONSE.SUCCESS) {
					// this.showDanger(dangerTpl);
					this.notif.showNotif();
				} else {
					this.service.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.blockUI.stop();
				this.http.handleError(error);
			}
		);
		this.subsribers.push(sub);
	}

	showDanger(dangerTpl) {
		this.toastService.removeAll();
		this.toastService.show(dangerTpl, {
			delay: 100,
			classname: 'kanan-atas',
		});
	}

	pergiKeKeranjang() {
		this.router.navigate(['./cart']);
	}

	truncateChar(strtxt) {
		var ret = strtxt;
		if (strtxt.length > 56) {
			ret = strtxt.substring(0, 56) + '...';
		}
		return ret;
	}

	itemClicked(item) {
		this.router.navigate(['./detail-product/' + item.partner_sku_item]);
	}

	showInitialQuantity(item) {
		return (
			!(
				item.initial_quantity == item.quantity ||
				item.initial_quantity == null
			) && !(item.status == 'REJECTED' || item.status == 'CANCEL')
		);
	}
}
