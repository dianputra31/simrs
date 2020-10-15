import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartListElement } from '../../../../models/cart-list.model';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  datacart;
  @Input() item:CartListElement;
  hoho;
  styles;
  classObj ={};

  @Input() redirlink; boolean = false;

  constructor(
    private router: Router,
  ) { }
	ngOnInit(): void {
		if (this.redirlink) this.styles = "redirectdetail"; else this.styles = "redirectdetailnot";

		// this.items = {
		// 	itemImage:
		// 		'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//94/MTA-7491180/apple_apple_macbook_pro_mxk62_silver_-13_inch-_intel_iris_plus_graphics-_2-0ghz_intel_core_i5-_16gb_ram-_512gb_ssd-_macos-_full04_ebjfn2ps.jpg',
		// 	itemName:
		// 		'Macbook Pro 2020 13" Inch 2.0 GHZ i5 10th Gen 512GB 1TB 16GB TouchBar - 512 GB, Space Grey',
		// 	itemPrice: 'Rp 24.500.000',
		// 	itemColor: '#B90000',
		// 	itemWeight: '4 kg',
		// 	itemQty: '2',
		// 	redir: '0',
		// };
	}

	goToDetail() {


		if (this.redirlink) {
			this.router.navigate([]).then(result => { window.open('./detail-product', '_blank') });
		} else {
			console.log('unclickable');
		}
	}

}
