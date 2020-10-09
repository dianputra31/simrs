import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartListItemModel } from '../../../../models/cart-list-item.model';

@Component({
	selector: 'item-card',
	templateUrl: './item-card.component.html',
	styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
	@Input() item: CartListItemModel;
	@Output() onUpdateQty = new EventEmitter();
	constructor() {}

	ngOnInit(): void {}

	handleClickCheckbox(checked) {
		this.item.selected = checked;
	}
	handleQtyUpdate(qty) {
		this.item.quantity = qty;
		this.onUpdateQty.emit();
	}

	onImgError(event) {
		event.target.src = '../../../../assets/image/icons/default-item.png';
	}
}
