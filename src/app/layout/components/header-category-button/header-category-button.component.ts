import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BaseService } from '../../../core/base-service/service/base.service';
import { CatalogRespModel } from '../../_model/catalog-response.model';
import { CategoryRespModel } from '../../_model/category-response.model';

@Component({
	selector: 'header-category-button',
	templateUrl: './header-category-button.component.html',
	styleUrls: ['./header-category-button.component.scss'],
})
export class HeaderCategoryButtonComponent implements OnInit {
	categories = [];
	clickedCategory: CategoryRespModel;
	subsribers: Subscription[];

	subcategories = [
		'Kemeja',
		'Kaos',
		'Celana',
		'Celana Pendek',
		'Jas',
		'Topi',
		'Dasi',
		'Kacamata',
		'Jogger Pants',
	];

	constructor(private router: Router, private service: BaseService) {}

	ngOnInit() {
		this.subsribers = [];
		this.getCatalog();
	}

	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe);
	}

	getCatalog() {
		const url =
			'http://ec2-18-136-210-171.ap-southeast-1.compute.amazonaws.com:20002/product/category/list';

		const sub = this.service
			.getData(url, CatalogRespModel)
			.subscribe((resp) => {
				this.categories = resp.category;
				this.clickedCategory = this.categories[0];
				const x: number = this.clickedCategory.subcategory.length / 4;
				const row = +x.toFixed();
				for (var col = 0; col < 4; col++) {
					for (var i = col * row; i < col * row + 4; i++) {
						console.log(this.clickedCategory.subcategory[i]);
					}
				}
			});

		this.subsribers.push(sub);
	}
}
