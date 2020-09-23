import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'discount-harga-coret',
	templateUrl: './discount-harga-coret.component.html',
	styleUrls: ['./discount-harga-coret.component.scss'],
})
export class DiscountHargaCoretComponent implements OnInit {
	@Input() discount_percent: string = null;
	@Input() original_price: number;
	@Input() sell_price: number;

	constructor() {}

	ngOnInit(): void {}
}
