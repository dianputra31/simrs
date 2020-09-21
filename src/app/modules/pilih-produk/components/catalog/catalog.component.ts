import { Component, Input, OnInit } from '@angular/core';
import { ProductCatalogResponseModel } from '../../../../models/product-catalog-response-model';

@Component({
	selector: 'app-catalog',
	templateUrl: './catalog.component.html',
	styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
	@Input() items: ProductCatalogResponseModel;
	constructor() {}

	ngOnInit(): void {}
}
