import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CatalogService } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { CatalogRespModel } from '../../../../models/catalog-response.model';

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
		const url = CatalogService;
		const sub = this.service
			.getData(url, CatalogRespModel)
			.subscribe((resp) => {
				console.log(resp);
			});

		this.subsribers.push(sub);
	}
}
