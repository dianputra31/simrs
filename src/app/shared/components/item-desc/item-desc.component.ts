import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../models/Approval.model';

@Component({
	selector: 'item-desc',
	templateUrl: './item-desc.component.html',
	styleUrls: ['./item-desc.component.scss'],
})
export class ItemDescComponent implements OnInit {
	@Input() item: Product;

	constructor(private router: Router) {}

	ngOnInit(): void {}

	itemClicked() {
		this.router.navigate([
			'./detail-product/' + this.item.partner_sku_item,
		]);
	}
}
