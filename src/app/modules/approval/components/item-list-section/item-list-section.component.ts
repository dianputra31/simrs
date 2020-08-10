import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'item-list-section',
	templateUrl: './item-list-section.component.html',
	styleUrls: ['./item-list-section.component.scss'],
})
export class ItemListSectionComponent implements OnInit {
	items = ['', '', ''];
	constructor() {}

	ngOnInit(): void {}
}
