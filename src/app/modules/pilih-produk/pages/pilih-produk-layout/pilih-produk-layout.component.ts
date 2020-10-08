import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CatalogService, ProductCatalogUrl } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { RedirectParameterService } from '../../../../layout/redirect-parameter.service';
import { CatalogRespModel } from '../../../../models/catalog-response.model';
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
	IsWait: boolean;
	qtyproduk: number;
	namakategori: any;
	categories;
	category_id;

	subsribers: Subscription[];
	items: ProductCatalogResponseModel[];
	constructor(private route: ActivatedRoute, private router: Router, private service: BaseService, private _redirectparam: RedirectParameterService,) { }

	test(keyword) {
		console.log('param: ', this.param);
		console.log(keyword);

		this.param.keyword = keyword;

		console.log('this-keyword: ', this.param.keyword);
	}

	ngOnInit(): void {
		this.router.routeReuseStrategy.shouldReuseRoute = () => false;
		this.namakategori = 'semua Kategori';

		this.IsWait = true;
		this.subsribers = [];
		this.route.paramMap.subscribe((params) => {
			this.getItems(
				params.get('category_id'),
				params.get('sub_category_id'),
				this._redirectparam.namaproduk,
				this._redirectparam.price_start,
				this._redirectparam.price_end,
			);
			this.category_id = params.get('category_id');
			if (this._redirectparam.namaproduk !== '' && this._redirectparam.namaproduk !== '0') this.keyword = '"' + this._redirectparam.namaproduk + '"'; else this.keyword = '';
		});

		const url = CatalogService;

		const sub = this.service
			.getData(url, CatalogRespModel)
			.subscribe((resp) => {
				this.categories = resp.category;
				for (let items of this.categories) {
					if (items.id == this.category_id) this.namakategori = 'kategori ' + items.category_name;
				}

			});

		this.IsWait = false;
	}

	getItems(category_id, sub_category_id, keyword, price_start, price_end) {
		this.IsWait = true;
		if (category_id != '0') var s_cat = '&category_id=' + category_id; else var s_cat = '';
		if (sub_category_id != '0') var s_subcat = '&sub_category_id=' + sub_category_id; else var s_subcat = '';
		if (keyword != '' && keyword != '0') var s_key = '&keyword=' + keyword; else s_key = '';
		if (price_start != '0') var s_price_start = '&price_start=' + price_start; else var s_price_start = '';
		if (price_end != '0') var s_price_end = '&price_end=' + price_end; else var s_price_end = '';

		// console.log(ProductCatalogUrl + '?' + s_key);

		const sub = this.service
			.getData(ProductCatalogUrl + '?page=1' + s_cat + s_subcat + s_key + s_price_start + s_price_end, ProductCatalogResponseModel, null, true)
			.subscribe((resp) => {
				this.items = resp;
				this.IsWait = false;
				this.qtyproduk = resp.length;
			});

		this.subsribers.push(sub);
	}
}
