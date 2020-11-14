import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
	minimum: string;
	maximum: string;

	formGroup: FormGroup;

	minvalue;
	maxvalue;

	myOptions = {
		digitGroupSeparator: '.',
		decimalCharacter: ',',
		decimalPlaces: 0,
		decimalCharacterAlternative: '.',
		currencySymbol: '',
		currencySymbolPlacement: 's',
		roundingMethod: 'U',
		minimumValue: '0',
	};

	constructor(
		private _redirectparam: RedirectParameterService,
		private router: Router,
		private PilihProdukLayout: PilihProdukLayoutComponent,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {}

	qtyChange(a) {
		console.log(this.minimum);
		let numberVal = parseInt(this.minimum).toLocaleString();
		this.minimum = numberVal;
	}

	formatRupiah(angka, prefix) {
		var separator;
		var number_string = angka.replace(/[^,\d]/g, '').toString(),
			split = number_string.split(','),
			sisa = split[0].length % 3,
			rupiah = split[0].substr(0, sisa),
			ribuan = split[0].substr(sisa).match(/\d{3}/gi);

		// tambahkan titik jika yang di input sudah menjadi angka ribuan
		if (ribuan) {
			separator = sisa ? '.' : '';
			rupiah += separator + ribuan.join('.');
		}

		rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
		return prefix == undefined ? rupiah : rupiah ? rupiah : '';
	}

	carilagi(a, b) {
		if (a === '') a = 0;
		if (b === '') b = 0;
		this._redirectparam.price_start = a;
		this._redirectparam.price_end = b;

		this.route.paramMap.subscribe((params) => {
			if (
				this._redirectparam.namaproduk !== '' &&
				this._redirectparam.namaproduk !== '0'
			)
				this.keyword = '"' + this._redirectparam.namaproduk + '"';
			else this.keyword = '';
			var keywordnya = this.keyword.replace(/['"]+/g, '');
			var paramet: any = {
				category_id: params.get('category_id'),
				sub_category_id: params.get('sub_category_id'),
				namaproduk: keywordnya,
				price_start: this._redirectparam.price_start,
				price_end: this._redirectparam.price_end,
				page: 1,
				limit: 30,
			};

			this.PilihProdukLayout.getItems(paramet, 2);
			// alert("here");
		});
	}
}
