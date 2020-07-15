import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { CatalogRespModel } from '../../_model/catalog-response.model';

@Component({
	selector: 'catalog-section',
	templateUrl: './catalog-section.component.html',
	styleUrls: ['./catalog-section.component.scss'],
})
export class CatalogSectionComponent implements OnInit {
	subsribers: Subscription[];

	constructor(private service: BaseService) {}

	ngOnInit() {
		this.subsribers = [];
		this.getCatalog();
	}

	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe);
	}

	getCatalog() {
		const url =
			'http://ec2-1-136-210-171.ap-southeast-1.compute.amazonaws.com:20002/product/catalog';
		const sub = this.service
			.getData(url, CatalogRespModel)
			.subscribe((resp) => {
				console.log(resp);
			});

		this.subsribers.push(sub);
	}
}
