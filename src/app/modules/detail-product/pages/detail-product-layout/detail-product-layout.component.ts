import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import { CatalogProductDetailUrl, RESPONSE } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { QuantityModel } from '../../../../models/quantity.model';
import { ProductDetailResponseModel } from '../../models/product-detail-response.model';

@Component({
	selector: 'app-detail-product-layout',
	templateUrl: './detail-product-layout.component.html',
	styleUrls: ['./detail-product-layout.component.scss'],
})
export class DetailProductLayoutComponent implements OnInit {
	subsribers: Subscription[];
	productDetail: ProductDetailResponseModel;
	qtyObject: QuantityModel = new QuantityModel();
	isSpinner: boolean = false;
	subscribers: Subscription[] = [];
	prodcat: any;
	subcat: any;
	prodname: any;
	catid: any;
	subcatid: any;
	@BlockUI() blockUI: NgBlockUI;


	constructor(private route: ActivatedRoute, private http: HttpService, private service: BaseService) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			this.getItemDetail(params.get('sku-item'));
		});

		this.qtyObject.qty = 1;
	}
	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe());
	}
	getItemDetail(skuItem: String) {
		this.isSpinner = true;
		const url = CatalogProductDetailUrl + '/' + skuItem;
		const sub = this.http.get(url).subscribe((resp) => {
			if (resp.status.rc === RESPONSE.SUCCESS) {
				this.productDetail = resp.data;
				// console.log(resp.data);
				this.prodcat = this.productDetail.category;
				this.subcat = this.productDetail.subcategory;
				this.prodname = this.productDetail.product_name;
				this.catid = this.productDetail.category_id;
				this.subcatid = this.productDetail.subcategory_id;
				
				this.isSpinner = false;
			}else{
				this.service.showAlert(resp.status.msg);
			}
			}); 

		this.subscribers.push(sub);
	}
}
