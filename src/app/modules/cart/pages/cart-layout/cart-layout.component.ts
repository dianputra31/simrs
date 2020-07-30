import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'cart-layout',
	templateUrl: './cart-layout.component.html',
	styleUrls: ['./cart-layout.component.scss'],
})
export class CartLayoutComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	items = [
		{ outOfStock: false, selected: true },
		{ outOfStock: false, selected: true },
		{ outOfStock: true, selected: false },
	];

	pilihSemuaEventHandler(pilihSemuaStatus) {
		if (pilihSemuaStatus) {
			pilihSemuaStatus = false;
			for (var index in this.items) {
				var item = this.items[index];

				item.selected = false;
			}
		} else {
			pilihSemuaStatus = true;
			for (var index in this.items) {
				var item = this.items[index];
				if (!item.outOfStock) {
					item.selected = true;
				}
			}
		}
	}

	adaItemDipilih() {
		var adaItemChecked = false;
		for (var index in this.items) {
			var item = this.items[index];

			if (item.selected == true) {
				adaItemChecked = true;
			}
		}

		return adaItemChecked;
	}
}
