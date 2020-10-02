import { Component, Input, OnInit } from '@angular/core';
import { CartListElement } from '../../../../models/cart-list.model';

@Component({
	selector: 'check-box-item',
	templateUrl: './check-box-item.component.html',
	styleUrls: ['./check-box-item.component.scss'],
})
export class CheckBoxItemComponent implements OnInit {
	@Input() item: CartListElement;
	constructor() {}
	status: boolean = false;
	ngOnInit(): void {}

	shouldSelectItem(outOfStock, selected) {
		if (outOfStock) {
			return false;
		} else {
			return selected;
		}
	}

	hello() {
		// this.item.selected = false;
	}
}
