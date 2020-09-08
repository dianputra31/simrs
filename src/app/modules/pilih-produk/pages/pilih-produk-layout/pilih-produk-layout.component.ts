import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CatalogCategoryUrl } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { CatalogRespModel } from '../../../../models/catalog-response.model';

@Component({
	selector: 'app-pilih-produk-layout',
	templateUrl: './pilih-produk-layout.component.html',
	styleUrls: ['./pilih-produk-layout.component.scss'],
})
export class PilihProdukLayoutComponent implements OnInit {
	subsribers: Subscription[];

	constructor(private route: ActivatedRoute, private service: BaseService) {}

	ngOnInit(): void {
		this.subsribers = [];
		this.route.paramMap.subscribe((params) => {
			this.getItems(
				params.get('category_id'),
				params.get('sub_category_id')
			);
		});
	}

	getItems(category_id, sub_category_id) {
		const sub = this.service
			.getData(CatalogCategoryUrl, CatalogRespModel)
			.subscribe((resp) => {
				console.log(resp);
			});

		this.subsribers.push(sub);
	}
}
