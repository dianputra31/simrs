import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RedirectParameterService } from '../../../../layout/redirect-parameter.service';
import { PilihProdukLayoutComponent } from '../../pages/pilih-produk-layout/pilih-produk-layout.component';

@Component({
	selector: 'filter-card',
	templateUrl: './filter-card.component.html',
	styleUrls: ['./filter-card.component.scss'],
})
export class FilterCardComponent implements OnInit {
	cat_id;
	subcat_id;
	keyword;

	constructor(
		private _redirectparam: RedirectParameterService,
		private router: Router,
		private PilihProdukLayout: PilihProdukLayoutComponent,
		private route: ActivatedRoute,
	) { }

	ngOnInit(): void {
		
	}

	qtyChange(a,b){
		
	}

	carilagi(a, b) {
		if (a === '') a = 0;
		if (b === '') b = 0;
		this._redirectparam.price_start = a;
		this._redirectparam.price_end = b;

		this.route.paramMap.subscribe((params) => {
			if (this._redirectparam.namaproduk !== '' && this._redirectparam.namaproduk !== '0') this.keyword = '"' + this._redirectparam.namaproduk + '"'; else this.keyword = '';
			var keywordnya = this.keyword.replace(/['"]+/g, '');
			var paramet: any = {
				category_id: params.get('category_id'),
				sub_category_id: params.get('sub_category_id'),
				namaproduk: keywordnya,
				price_start: this._redirectparam.price_start,
				price_end: this._redirectparam.price_end,
				page: 1,
				limit:30,
		};

		this.PilihProdukLayout.getItems(paramet,2);
		// alert("here");
		
	});
}

}
