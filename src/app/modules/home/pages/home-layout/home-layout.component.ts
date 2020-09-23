import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
	ProductCatalogUrl,
	ProductTopSubcategoryUrl,
} from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { ProductCatalogRequestModel } from '../../../../models/product-catalog-request.model';
import { ProductCatalogResponseModel } from '../../../../models/product-catalog-response-model';
import { ProductTopSubcategoryResponseModel } from '../../../../models/product-top-subcategory-response.model';
@Component({
	selector: 'home-layout',
	templateUrl: './home-layout.component.html',
	styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent implements OnInit {
	subsribers: Subscription[];
	topCategories: ProductTopSubcategoryResponseModel[];
	productCatalogRows: ProductCatalogResponseModel[][];
	constructor(private service: BaseService) {}

	ngOnInit() {
		this.subsribers = [];
		this.getProductTopSubcategory();
		this.productCatalogRows = [];
	}

	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe);
	}

	getProductTopSubcategory() {
		const url = ProductTopSubcategoryUrl;
		const sub = this.service
			.getData(url, ProductTopSubcategoryResponseModel, null, true)
			.subscribe((resp) => {
				this.topCategories = resp;

				for (var i = 0; i < this.topCategories.length; ++i) {
					this.getCatalog(this.topCategories[i].id);
				}
			});

		this.subsribers.push(sub);
	}

	getCatalog(category_id: number) {
		const param = new ProductCatalogRequestModel();

		param.category_id = category_id;
		param.limit = 6;

		const url = ProductCatalogUrl + '?' + param.convertQueryParameter();
		const sub = this.service
			.getData(url, ProductCatalogResponseModel, null, true)
			.subscribe((resp) => {
				this.productCatalogRows.push(resp);
			});

		this.subsribers.push(sub);
	}
}
