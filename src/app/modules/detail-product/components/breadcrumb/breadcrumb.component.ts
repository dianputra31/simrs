import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDetailResponseModel } from '../../models/product-detail-response.model';

@Component({
	selector: 'breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
	@Input() productDetail: ProductDetailResponseModel;

	constructor(private router: Router,) { }

	ngOnInit(): void {

	}

	bukapencarian(a, b) {
		this.router.navigate([
			'../pilih-produk/' + a + '/' + b + '/',
		]);
	}

}
