import { Component, Input, OnInit } from '@angular/core';
import { CartListElement } from '../../../../models/cart-list.model';
import { QuantityModel } from '../../../../models/quantity.model';
import { ToastService } from '../../../../shared/toast/toast-service';

@Component({
	selector: 'item-list',
	templateUrl: './item-list.component.html',
	styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
	@Input() items: CartListElement[];
	constructor(public toastService: ToastService) { }

	ngOnInit(): void { }

	deleteItem(dangerTpl) {
		this.showDanger(dangerTpl);
	}

	showDanger(dangerTpl) {
		this.toastService.removeAll();
		this.toastService.show(dangerTpl, {
			delay: 15000,
			classname: 'bawah-tengah',
		});
	}

	shouldSelectItem(outOfStock, selected) {
		if (outOfStock) {
			return false;
		} else {
			return selected;
		}
	}

	getQtyObj(qty) {
		var qtyObject = new QuantityModel();

		qtyObject.qty = qty;
		qtyObject.qtyDisplay = qtyObject.display();
		return qtyObject;
	}


	test(h: any) {
		console.log(h);
	}
}
