import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import {
	AddCart,
	RESPONSE,
	TransactionConfirmUrl,
	TransactionDetailUrl,
} from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { RedirectParameterService } from '../../../../layout/redirect-parameter.service';
import { CartItemRequestModel } from '../../../../models/cart-item-request.model';
import { CartItemResponseModel } from '../../../../models/cart-item-response.model';
import { CartItemModel } from '../../../../models/cart-item.model';
import { TanggalPipe } from '../../../../pipes/tanggal.pipe';
import { ToastService } from '../../../../shared/toast/toast-service';
@Component({
	selector: 'transaction-detail-layout',
	templateUrl: './transaction-detail-layout.component.html',
	styleUrls: ['./transaction-detail-layout.component.scss'],
})
export class TransactionDetailLayoutComponent implements OnInit {
	@BlockUI() blockUI: NgBlockUI;
	subscribers: Subscription[];
	item: any;

	purchased_id: string;
	item_id: string;
	constructor(
		private route: ActivatedRoute,
		private service: BaseService,
		private http: HttpService,
		private datePipe: TanggalPipe,
		private _redirectparam: RedirectParameterService,
		private router: Router,
		public toastService: ToastService
	) {}

	ngOnInit(): void {
		this.subscribers = [];
		this.route.paramMap.subscribe((params) => {
			this.blockUI.start();
			this.purchased_id = params.get('purchased_id');
			this.item_id = params.get('item_id');
			this.getTransactionDetail();
		});
	}

	ngOnDestroy() {
		this.subscribers.forEach((each) => each.unsubscribe);
	}

	getTransactionDetail() {
		this.blockUI.start();
		const url = `${TransactionDetailUrl}/${this.purchased_id}/${this.item_id}`;

		const sub = this.http.get(url).subscribe((resp) => {
			this.blockUI.stop();
			if (resp.status.rc === RESPONSE.SUCCESS) {
				this.item = resp.data;
				this.item.statusTranslated = this.translateStatus(
					this.item.status
				);
				console.log(this.item);
			} else {
				alert('error');
			}
		});
		this.subscribers.push(sub);
	}

	translateStatus(status): string {
		switch (status) {
			case 'ORDERED':
				return 'DIORDER';
			case 'PENDING':
				return 'PENDING';
			case 'PROCESS':
				return 'DIPROSES';
			case 'DELIVER':
				return 'DIKIRIM';

			case 'RECEIVED':
				return 'DITERIMA';
			case 'CLOSED':
				return 'SELESAI';

			case 'CANCEL':
				return 'DIBATALKAN';
			case 'OUTOFSTOCK':
				return 'STOK HABIS';
			case 'REJECTED':
				return 'DITOLAK';
		}
	}

	// case 'ORDERED':
	// case 'PENDING':
	// case 'PROCESS':
	// case 'DELIVER':
	// 	//TOMBOL 'SELESAI' ABU2

	// case 'RECEIVED':
	// 	//TOMBOL 'SELESAI' MERAH

	// case 'CLOSED':
	// 	//TOMBOL 'BELI LAGI' ABU2

	// case 'CANCEL':
	// case 'OUTOFSTOCK':
	// case 'REJECTED':
	// 	//TOMBOL 'CARI SEJENIS' MERAH

	onImgError(event) {
		event.target.src = '../../../../assets/image/icons/default-item.png';
	}

	confirmSelesaiOrder() {
		this.blockUI.start();

		const url = `${TransactionConfirmUrl}/${this.purchased_id}/${this.item_id}`;
		const sub = this.service
			.postData(url, false, false, false, false)
			.subscribe((resp) => {
				this.blockUI.stop();
				if (resp.data) {
					this.getTransactionDetail();
				}
			});
		this.subscribers.push(sub);

		this.blockUI.stop();
	}

	estimateDeliveryTime(item) {
		// if (item) {
		// 	var processDateString = item?.item_status_history?.filter(
		// 		(x) => x.status == 'PROCESS'
		// 	)[0]?.updated_at;

		// 	if (processDateString) {
		// 		var processDate = new Date(processDateString);
		// 		var deliveryDate = new Date(
		// 			processDate.setTime(
		// 				processDate.getTime() + item?.max_days * 86400000
		// 			)
		// 		);

		// 		return this.datePipe.transform(
		// 			deliveryDate.toISOString(),
		// 			'tgl'
		// 		);
		// 	} else {
		// 		return '---';
		// 	}
		// } else {
		// 	return '---';
		// }

		if (
			item?.status == 'ORDERED' ||
			item?.status == 'PENDING' ||
			item?.status == 'PROCESS' ||
			item?.status == 'DELIVER' ||
			item?.status == 'RECEIVED' ||
			item?.status == 'CLOSED'
		) {
			if (item?.item_status_history?.PROCESS != null) {
				var update = item?.item_status_history?.PROCESS.updated_at;

				var processDate = new Date(update);
				var processDate2 = new Date(update);
				var deliveryDate = new Date(
					processDate.setTime(
						processDate.getTime() + item?.min_days * 86400000
					)
				);

				var deliveryDate2 = new Date(
					processDate2.setTime(
						processDate2.getTime() + item?.max_days * 86400000
					)
				);
				return (
					this.datePipe.transform(deliveryDate.toISOString(), 'tgl') +
					' - ' +
					this.datePipe.transform(deliveryDate2.toISOString(), 'tgl')
				);
			} else {
				return '-';
			}
		} else {
			return '-';
		}
	}

	cariSejenis() {
		const a: any = this.item.product_name;
		this._redirectparam.namaproduk = a;
		this.router.navigate([
			`./pilih-produk/${this.item.category_id}/${this.item.subcategory_id}/` +
				a.replaceAll('/', '-'),
		]);
	}

	showPengirimanNoResi() {
		return this.item.status != 'OUTOFSTOCK';
	}

	tambahkanKeKeranjang(dangerTpl) {
		console.log('yest');
		this.showDanger(dangerTpl);
		var test = new CartItemModel();
		test.product_id = this.item.id;
		test.quantity = 1;

		var cartreq = new CartItemRequestModel();
		cartreq.cart_list = [];
		cartreq.cart_list.push(test);

		const sub = this.service
			.postData(AddCart, cartreq, CartItemResponseModel, false)
			.subscribe((resp) => {
				console.log('resp: ', resp);
			});
		this.subscribers.push(sub);
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
