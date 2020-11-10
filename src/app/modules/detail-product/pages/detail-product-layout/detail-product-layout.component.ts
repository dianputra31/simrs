import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
	productDetail: ProductDetailResponseModel;
	qtyObject: QuantityModel = new QuantityModel();

	constructor(private route: ActivatedRoute, private service: BaseService) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			this.getItemDetail(params.get('sku-item'));
		});

		this.qtyObject.qty = 1;
	}

	getItemDetail(skuItem: String) {
		const url = CatalogProductDetailUrl + '/' + skuItem;
		const sub = this.service
			.getData(url, ProductDetailResponseModel, null, false)
			.subscribe((resp) => {
				this.productDetail = resp;
			}); 

		// this.subsribers.push(sub);
	}
}
