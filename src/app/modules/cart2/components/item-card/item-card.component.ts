import { Component, Input, OnInit } from '@angular/core';
import { CartListItemModel } from '../../../../models/cart-list-item.model';

@Component({
	selector: 'item-card',
	templateUrl: './item-card.component.html',
	styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
	@Input() item: CartListItemModel;
	constructor() {}

	ngOnInit(): void {}
}
