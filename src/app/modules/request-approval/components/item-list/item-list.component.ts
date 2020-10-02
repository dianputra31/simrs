import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../../models/checkout-cart.model';

@Component({
	selector: 'item-list',
	templateUrl: './item-list.component.html',
	styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
	@Input() items: Product[];
	constructor() { }

	ngOnInit(): void { }
}
