import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../../models/Approval.model';

@Component({
	selector: 'item-list-section',
	templateUrl: './item-list-section.component.html',
	styleUrls: ['./item-list-section.component.scss'],
})
export class ItemListSectionComponent implements OnInit {
	@Input() items: [];
	@Output() bapaknyaDiclick = new EventEmitter<Product>();

	availableItems = [];
	cart = [];

	constructor() {
		// this.availableItems = this.items.filter(this.isAvailable);
		// this.items.filter(this.isAvailable);
	}

	ngOnInit(): void {
		console.log(this.items);
	}

	isAvailable(element, index, array) {
		return element.available;
	}

	putTocart(item) { }

	cobaDulu(item: Product) {
		return this.bapaknyaDiclick.emit(item);
	}
}
