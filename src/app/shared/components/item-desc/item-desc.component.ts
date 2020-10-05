import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../models/Approval.model';

@Component({
	selector: 'item-desc',
	templateUrl: './item-desc.component.html',
	styleUrls: ['./item-desc.component.scss']
})
export class ItemDescComponent implements OnInit {

	@Input() item: Product;

	constructor() { }

	ngOnInit(): void {
	}

}
