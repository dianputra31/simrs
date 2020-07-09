import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'catalog-card-button',
	templateUrl: './catalog-card-button.component.html',
	styleUrls: ['./catalog-card-button.component.scss'],
})
export class CatalogCardButtonComponent implements OnInit {
	qty: number = 0;
	show: boolean = true;

	constructor() {}

	ngOnInit() {}

	focusOutFunction() {
		if (this.qty == 0) {
			this.show = true;
		} else {
			this.show = false;
		}
	}

	removeFromCart() {
		if (this.qty != 0) this.qty--;
	}

	addToCart() {
		this.qty++;
	}
}
