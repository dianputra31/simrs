import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'catalog-card-button',
	templateUrl: './catalog-card-button.component.html',
	styleUrls: ['./catalog-card-button.component.scss'],
})
export class CatalogCardButtonComponent implements OnInit {
	qty: any = 0;
	show: boolean = true;

	constructor() {}

	ngOnInit() {}

	removeFromCart() {
		if (this.qty != 0) this.qty--;
	}

	addToCart() {
		this.qty++;
	}

	qtyChange() {
		if (this.qty == null) {
			this.qty = 0;
		}
	}
}
