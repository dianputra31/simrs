import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { RedirectParameterService } from '../../../../layout/redirect-parameter.service';
import { CatalogCategoryModel } from '../../../../models/catalog-category.model';
import { ProductCatalogResponseModel } from '../../../../models/product-catalog-response-model';

@Component({
	selector: 'catalog-section',
	templateUrl: './catalog-section.component.html',
	styleUrls: ['./catalog-section.component.scss'],
})
export class CatalogSectionComponent implements OnInit {
	@Input() products: ProductCatalogResponseModel[];
	subsribers: Subscription[];
	clickedCategory: CatalogCategoryModel;

	constructor(
		private service: BaseService,
		private router: Router,
		private _redirectparam: RedirectParameterService
	) {}

	ngOnInit() {
		console.log(this.products);
		this.subsribers = [];
	}

	lihatSemua(a, b) {
		this._redirectparam.namaproduk = '';
		this.router.navigate(['/pilih-produk/' + a + '/' + b]);
	}
}
