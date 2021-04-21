import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RedirectParameterService } from '../../../../layout/redirect-parameter.service';

@Component({
	selector: 'breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
	// @Input() productDetail: ProductDetailResponseModel;
	@Input() prodcat: any;
	@Input() subcat: any;
	@Input() prodname: any;
	@Input() catid: any;
	@Input() subcatid: any;

	// prodcat: any;

	constructor(private router: Router, private _redirectparam: RedirectParameterService) { }

	ngOnInit(): void {
	}

	carikat(a, b) {
		this._redirectparam.namaproduk = "";
		this.router.navigate([
			'../pilih-produk/' + a + '/0/',
		]);
	}

	
	carisubkat(a, b) {
		this._redirectparam.namaproduk = "";
		this.router.navigate([
			'../pilih-produk/' + a + '/' + b + '/',
		]);
	}

}
