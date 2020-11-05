import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddCart } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { RedirectParameterService } from '../../../../layout/redirect-parameter.service';
import { CartItemRequestModel } from '../../../../models/cart-item-request.model';
import { CartItemResponseModel } from '../../../../models/cart-item-response.model';
import { CartItemModel } from '../../../../models/cart-item.model';
import { TransactionItemResponseModel } from '../../../../models/transaction-item-response.model';
import { ToastService } from '../../../../shared/toast/toast-service';
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
	// items;
	// keyword;
	// filterservicesubscription;

	filternya;

	// keywordSearch: FilterInputComponent = new FilterInputComponent()
	subsribers: Subscription[];
	constructor(
		public dialog: MatDialog,
		private router: Router,
		private route: ActivatedRoute, // private filterservice: FilterInputComponent,
		private _redirectparam: RedirectParameterService,
		private service: BaseService,
		public toastService: ToastService
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
		dialogConfig.id = 'modal-component';
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

	belilagi(dangerTpl, item: TransactionItemResponseModel) {
		this.showDanger(dangerTpl);
		var test = new CartItemModel();
		test.product_id = item.id;
		test.quantity = item.quantity;

		var cartreq = new CartItemRequestModel();
		cartreq.cart_list = [];
		cartreq.cart_list.push(test);

		const sub = this.service
			.postData(AddCart, cartreq, CartItemResponseModel, false)
			.subscribe((resp) => {
				console.log('resp: ', resp);
			});
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
}
