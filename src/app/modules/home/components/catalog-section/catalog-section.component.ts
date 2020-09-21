import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { ProductCatalogResponseModel } from '../../../../models/product-catalog-response-model';

@Component({
	selector: 'catalog-section',
	templateUrl: './catalog-section.component.html',
	styleUrls: ['./catalog-section.component.scss'],
})
export class CatalogSectionComponent implements OnInit {
	@Input() products: ProductCatalogResponseModel[];
	subsribers: Subscription[];

	constructor(private service: BaseService) {}

	ngOnInit() {
		this.subsribers = [];
	}
}
