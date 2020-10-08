import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RedirectParameterService } from '../../../../layout/redirect-parameter.service';
// import { PilihProdukLayoutComponent } from '../../pages/pilih-produk-layout/pilih-produk-layout.component';

@Component({
	selector: 'filter-card',
	templateUrl: './filter-card.component.html',
	styleUrls: ['./filter-card.component.scss'],
})
export class FilterCardComponent implements OnInit {
	constructor(
		private _redirectparam: RedirectParameterService,
		private router: Router,
		// private PilihProdukLayout: PilihProdukLayoutComponent,
		private route: ActivatedRoute,
	) { }

	ngOnInit(): void {
	}

	carilagi(a, b) {
		// if (a === '') a = 0;
		// if (b === '') b = 0;
		this._redirectparam.price_start = a;
		this._redirectparam.price_end = b;

		// this.route.paramMap.subscribe((params) => {

		// 	this.PilihProdukLayout.getItems(
		// 		params.get('category_id'),
		// 		params.get('sub_category_id'),
		// 		this._redirectparam.namaproduk,
		// 		a, b
		// 	);

		// });



		// this.router.navigate(['./pilih-produk/0/0' + '/' + this._redirectparam.namaproduk]);

	}
}
