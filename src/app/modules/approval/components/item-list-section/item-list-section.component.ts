import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'item-list-section',
	templateUrl: './item-list-section.component.html',
	styleUrls: ['./item-list-section.component.scss'],
})
export class ItemListSectionComponent implements OnInit {
	@Input() items: [];

	availableItems = [];
	cart = [];

	constructor() {
		// this.availableItems = this.items.filter(this.isAvailable);
		this.items.filter(this.isAvailable);
	}

	ngOnInit(): void {
		console.log(this.items);
	}

	isAvailable(element, index, array) {
		return element.available;
	}

	putTocart(item) {}
}
