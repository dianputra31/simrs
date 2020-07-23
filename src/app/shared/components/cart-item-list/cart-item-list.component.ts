import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'cart-item-list',
	templateUrl: './cart-item-list.component.html',
	styleUrls: ['./cart-item-list.component.scss'],
})
export class CartItemListComponent implements OnInit {
	datacart;
	items;

	constructor() {}

	ngOnInit(): void {
		this.items = {
			itemImage:
				'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//94/MTA-7491180/apple_apple_macbook_pro_mxk62_silver_-13_inch-_intel_iris_plus_graphics-_2-0ghz_intel_core_i5-_16gb_ram-_512gb_ssd-_macos-_full04_ebjfn2ps.jpg',
			itemName:
				'Macbook Pro 2020 13" Inch 2.0 GHZ i5 10th Gen 512GB 1TB 16GB TouchBar - 512 GB, Space Grey',
			itemPrice: 'Rp 24.500.000',
			itemColor: '#B90000',
			itemWeight: '4 kg',
			itemQty: '2',
		};
	}
}
