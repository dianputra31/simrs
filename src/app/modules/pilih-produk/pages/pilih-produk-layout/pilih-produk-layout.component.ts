import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductCatalogUrl } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { RedirectParameterService } from '../../../../layout/redirect-parameter.service';
import { ProductCatalogResponseModel } from '../../../../models/product-catalog-response-model';

@Component({
	selector: 'app-pilih-produk-layout',
	templateUrl: './pilih-produk-layout.component.html',
	styleUrls: ['./pilih-produk-layout.component.scss'],
})
export class PilihProdukLayoutComponent implements OnInit {
	@Input() param: any;
	keyword: any;
	minprice: any;
	maxprice: any;

	subsribers: Subscription[];
	items: ProductCatalogResponseModel[];
	constructor(private route: ActivatedRoute, private service: BaseService, private _redirectparam: RedirectParameterService,) { }

	test(keyword) {
		console.log('param: ', this.param);
		console.log(keyword);

		this.param.keyword = keyword;

		console.log('this-keyword: ', this.param.keyword);
	}

	ngOnInit(): void {
		this.subsribers = [];
		this.route.paramMap.subscribe((params) => {
			this.getItems(
				params.get('category_id'),
				params.get('sub_category_id'),
				this._redirectparam.namaproduk,
				this._redirectparam.price_start,
				this._redirectparam.price_end,
			);
			this.keyword = this._redirectparam.namaproduk;
		});
	}

	getItems(category_id, sub_category_id, keyword, price_start, price_end) {
		const sub = this.service
			.getData(ProductCatalogUrl + '?keyword=' + keyword, ProductCatalogResponseModel, null, true)
			.subscribe((resp) => {
				console.log(resp);
				this.items = resp;
			});

		this.subsribers.push(sub);
	}
}
