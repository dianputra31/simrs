import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCatalogResponseModel } from '../../../models/product-catalog-response-model';

@Component({
	selector: 'catalog-card',
	templateUrl: './catalog-card.component.html',
	styleUrls: ['./catalog-card.component.scss'],
})
export class CatalogCardComponent implements OnInit {
	@Input() item: ProductCatalogResponseModel;
	constructor(private router: Router) {}

	ngOnInit() {}

	backToHome() {
		this.router.navigate([
			'./detail-product/' + this.item.partner_sku_item,
		]);
	}
}
