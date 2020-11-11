import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CatalogProductDetailUrl } from '../../../../app.constant';
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
	isSpinner: Boolean = false;

	constructor(private route: ActivatedRoute, private service: BaseService) {}

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
		console.log('1', this.isSpinner);
		const url = CatalogProductDetailUrl + '/' + skuItem;
		this.isSpinner = true;
		const sub = this.service
			.getData(url, ProductDetailResponseModel, null, false)
			.subscribe((resp) => {
				this.productDetail = resp;
				console.log(this.productDetail);
				this.isSpinner = false;
				console.log('2', this.isSpinner);
			});

		// this.subsribers.push(sub);
	}
}
