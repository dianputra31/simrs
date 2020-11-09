import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CatalogService, ProductCatalogUrl, RESPONSE } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
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
	limit: number = 30;
	page: number = 1;
	totalPages: number;
	paramet;

	innerHeight: any;
	leftContainerHeight: any;
	rightContainerHeight: any;
	topFixed: any;
	headers: any;
	isSpinner: Boolean = false;

	selector: string = '#left-container';
	@Inject(DOCUMENT) private _document: Document;

	subsribers: Subscription[];
	items: ProductCatalogResponseModel[];
	constructor(
		private route: ActivatedRoute, 
		private router: Router, 
		private service: BaseService, 
		private _redirectparam: RedirectParameterService,
		public http: HttpService,
		) { }

	test(keyword) {
		console.log('param: ', this.param);
		console.log(keyword);

		this.param.keyword = keyword;

		console.log('this-keyword: ', this.param.keyword);
	}

	ngOnInit(): void {
		this.items = [];
		this.router.routeReuseStrategy.shouldReuseRoute = () => false;
		this.namakategori = 'semua Kategori';
		this.qtyproduk = 0;


		this.IsWait = true;
		this.subsribers = [];
		
		this.getBase(this.page);

		const body = document.getElementsByTagName('body')[0];
		console.log(body);
		body.classList.add('no-scroll');
	}


	onScrollDown(e) {
		console.log('scrolled down!!', e);
		this.getBase(this.page++);
	}

	initScrolling() {
		this.topFixed = document?.getElementById('top-fixed')?.offsetHeight;
		this.headers = document?.getElementById('headers')?.offsetHeight;

		this.onResize();
	}

	@HostListener('window:resize', ['$event'])
	onResize() {
		this.innerHeight = window.innerHeight;

		this.leftContainerHeight =
			this.innerHeight - this.topFixed - this.headers;

		// this.rightContainerHeight =
		// 	this.innerHeight - this.topFixed - this.headers;
	}



	getBase(ev){
		console.log('page', this.page);
		
		this.route.paramMap.subscribe((params) => {
			if (this._redirectparam.namaproduk !== '' && this._redirectparam.namaproduk !== '0') this.keyword = '"' + this._redirectparam.namaproduk + '"'; else this.keyword = '';
			var keywordnya = this.keyword.replace(/['"]+/g, '');
			var paramet: any = {
				category_id: params.get('category_id'),
				sub_category_id: params.get('sub_category_id'),
				namaproduk: keywordnya,
				price_start: this._redirectparam.price_start,
				price_end: this._redirectparam.price_end,
				page: this.page,
				limit: this.limit,
			};

			

			this.getItems(paramet);

			
			this.category_id = params.get('category_id');
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



	getItems(paramet) {
		console.log(paramet.category_id + ' | ' + paramet.sub_category_id);

		this.IsWait = true;
		if (paramet.category_id != '0') var s_cat = '&category_id=' + paramet.category_id; else var s_cat = '';
		if (paramet.sub_category_id != '0') var s_subcat = '&sub_category_id=' + paramet.sub_category_id; else var s_subcat = '';
		if (paramet.namaproduk != '' && this.keyword != '0') var s_key = '&keyword=' + paramet.namaproduk; else s_key = '';
		if (paramet.price_start != '0') var s_price_start = '&price_start=' + paramet.price_start; else var s_price_start = '';
		if (paramet.price_end != '0') var s_price_end = '&price_end=' + paramet.price_end; else var s_price_end = '';
		if (paramet.page != '0') var s_page = '?page=' + paramet.page; else var s_page = '?page=1';
		if (paramet.limit != '0') var s_limit = '&limit=' + paramet.limit; else var s_limit = '&limit=20';


		// console.log(ProductCatalogUrl + '?' + s_key);

		
		// RESPONSE
		
		this.isSpinner = true;
		const sub = this.http.get(ProductCatalogUrl + s_page + s_limit  + s_cat + s_subcat + s_key + s_price_start + s_price_end)
			.subscribe((resp) => {
				this.isSpinner = false;

				if (resp.status.rc === RESPONSE.SUCCESS) {
					var newData = resp.data;

						this.qtyproduk += resp.data.length;
						
						this.items = this.items.concat(newData);
						console.log(this.items);

						this.initScrolling();
				} else {
					this.service.showAlert(resp.status.msg);
				}

				
			});

		this.subsribers.push(sub);
	}
}
