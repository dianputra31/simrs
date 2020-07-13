import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'catalog-card-button',
	templateUrl: './catalog-card-button.component.html',
	styleUrls: ['./catalog-card-button.component.scss'],
})
export class CatalogCardButtonComponent implements OnInit {
	qty: any = 0;
	show: boolean = true;

	@ViewChild('qty_input') qtyInput;

	constructor() {}

	ngOnInit() {}

	focusOutFunction() {
		if (this.qty == null) {
			this.qty = 0;
		}

		if (this.qty == 0) {
			this.show = true;
		} else {
			this.show = false;
		}
	}

	removeFromCart() {
		this.qtyInput.nativeElement.focus();
		if (this.qty != 0) this.qty--;
	}

	addToCart() {
		this.qtyInput.nativeElement.focus();
		this.qty++;
	}
}
