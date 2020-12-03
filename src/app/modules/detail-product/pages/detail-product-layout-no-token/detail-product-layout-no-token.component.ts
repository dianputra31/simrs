import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import {
	AddCart,
	CatalogProductDetailUrl,
	RESPONSE,
} from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { ToastService } from '../../../../shared/toast/toast-service';
import { PutInCartNotificationComponent } from '../../../../shared2/components/put-in-cart-notification/put-in-cart-notification.component';
import { ProductDetailResponseModel } from '../../models/product-detail-response.model';

@Component({
	templateUrl: './detail-product-layout-no-token.component.html',
	styleUrls: ['./detail-product-layout-no-token.component.scss'],
})
export class DetailProductLayoutNoTokenComponent implements OnInit {
	@ViewChild(PutInCartNotificationComponent, { static: false })
	notif: PutInCartNotificationComponent;

	productDetail: ProductDetailResponseModel;

	quantity = 1;

	isSpinner: Boolean = false;
	subscribers: Subscription[] = [];
	prodcat: any;
	subcat: any;
	prodname: any;
	catid: any;
	subcatid: any;
	@BlockUI() blockUI: NgBlockUI;

	constructor(
		private route: ActivatedRoute,
		private http: HttpService,
		private service: BaseService,
		private router: Router,

		public toastService: ToastService
	) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			this.getItemDetail(params.get('sku-item'));
		});
	}

	ngOnDestroy() {
		this.toastService.removeAll();
		this.subscribers.forEach((each) => each.unsubscribe);
	}

	getItemDetail(skuItem: String) {
		this.isSpinner = true;
		const url = CatalogProductDetailUrl + '/' + skuItem;
		const sub = this.http.get(url).subscribe(
			(resp) => {
				this.isSpinner = false;
				if (resp.status.rc == RESPONSE.SUCCESS) {
					this.productDetail = resp.data;
					// console.log(resp.data);
					this.prodcat = this.productDetail.category;
					this.subcat = this.productDetail.subcategory;
					this.prodname = this.productDetail.product_name;
					this.catid = this.productDetail.category_id;
					this.subcatid = this.productDetail.subcategory_id;
				} else {
					this.service.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.isSpinner = false;
				this.http.handleError(error);
			}
		);

		this.subscribers.push(sub);
	}

	onImgError(event) {
		event.target.src = '../../../../assets/image/icons/default-item.png';
	}

	handleQtyUpdate(qty) {
		this.quantity = qty;
	}

	tambahkanKeKeranjang() {
		var cartreq = {
			cart_list: [
				{
					product_id: this.productDetail.id,
					quantity: this.quantity,
				},
			],
		};

		const sub = this.http.post(AddCart, cartreq).subscribe(
			(resp) => {
				if (resp.status.rc == RESPONSE.SUCCESS) {
					// this.productDetail = resp.data;
					// console.log(resp.data);

					console.log('resp: ', resp);
					this.notif.showNotif();
				} else {
					this.service.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.http.handleError(error);
			}
		);
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
