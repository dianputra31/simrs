import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'item-list',
	templateUrl: './item-list.component.html',
	styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
	items = ['test', 'test'];
	constructor() {}

	ngOnInit(): void {}
}