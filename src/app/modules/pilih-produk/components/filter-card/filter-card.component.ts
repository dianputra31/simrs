import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RedirectParameterService } from '../../../../layout/redirect-parameter.service';

@Component({
	selector: 'filter-card',
	templateUrl: './filter-card.component.html',
	styleUrls: ['./filter-card.component.scss'],
})
export class FilterCardComponent implements OnInit {
	constructor(
		private _redirectparam: RedirectParameterService,
		private router: Router,
	) { }

	ngOnInit(): void { }

	carilagi(a, b) {
		console.log('here');
		// if (a === '') a = 0;
		// if (b === '') b = 0;
		this._redirectparam.price_start = a;
		this._redirectparam.price_end = b;

		this.router.navigate(['./pilih-produk/0/0' + '/' + this._redirectparam.namaproduk]);

	}
}
