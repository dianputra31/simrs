import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'transaction-detail-layout',
	templateUrl: './transaction-detail-layout.component.html',
	styleUrls: ['./transaction-detail-layout.component.scss'],
})
export class TransactionDetailLayoutComponent implements OnInit {
	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			console.log(params.get('purchased_id'));
			console.log(params.get('item_id'));

			// this.getItems(
			// 	params.get('category_id'),
			// 	params.get('sub_category_id'),
			// 	this._redirectparam.namaproduk,
			// 	this._redirectparam.price_start,
			// 	this._redirectparam.price_end,
			// );
			// this.category_id = params.get('category_id');
			// if (this._redirectparam.namaproduk !== '' && this._redirectparam.namaproduk !== '0') this.keyword = '"' + this._redirectparam.namaproduk + '"'; else this.keyword = '';
		});
	}

	getTransactionDetail() {}
}
