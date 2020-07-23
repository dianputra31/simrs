import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'cart-item-list',
	templateUrl: './cart-item-list.component.html',
	styleUrls: ['./cart-item-list.component.scss']
})
export class CartItemListComponent implements OnInit {
	datacart;

	constructor() { }

	ngOnInit(): void {
		this.datacart = [
			{
				'itemImage': 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//94/MTA-7491180/apple_apple_macbook_pro_mxk62_silver_-13_inch-_intel_iris_plus_graphics-_2-0ghz_intel_core_i5-_16gb_ram-_512gb_ssd-_macos-_full04_ebjfn2ps.jpg',
				'itemName': 'Macbook Pro 2020 13" Inch 2.0 GHZ i5 10th Gen 512GB 1TB 16GB TouchBar - 512 GB, Space Grey',
				'itemPrice': 'Rp 24.500.000',
				'itemColor': '#B90000',
				'itemWeight': '4 kg',
				'itemQty': '2',
			},
			{
				'itemImage': 'https://thumbs.worthpoint.com/zoom/images1/1/0610/15/hot-toys-batman-dark-knight-sonar-12_1_81cac7c8d8a42d5c4da1aed05ffb89c5.jpg',
				'itemName': 'Hot Toys - The Dark Knight Rises - Batman Figure - 901925',
				'itemPrice': 'Rp 3.000.000',
				'itemColor': '#A8A8A8',
				'itemWeight': '1 kg',
				'itemQty': '1',
			},
			{
				'itemImage': 'https://cdn.shopify.com/s/files/1/0318/2649/products/51QJusT3LrL_large.jpg?v=1571442497',
				'itemName': 'Batmobile Tumbler - Revoltech - Revoltech SFX 043 (Kaiyodo)',
				'itemPrice': 'Rp 1.250.000',
				'itemColor': '#2E2E2E',
				'itemWeight': '1 kg',
				'itemQty': '1',
			}
		]
	}

}
