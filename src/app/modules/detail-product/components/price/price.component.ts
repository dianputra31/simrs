import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../../../shared/toast/toast-service';

@Component({
	selector: 'price',
	templateUrl: './price.component.html',
	styleUrls: ['./price.component.scss'],
})
export class PriceComponent implements OnInit {
	qty = 0;
	constructor(public toastService: ToastService) {}

	ngOnInit(): void {}

	removeFromCart(dangerTpl) {
		if (this.qty != 0) {
			this.qty--;
			this.showDanger(dangerTpl);
		}
	}

	showDanger(dangerTpl) {
		this.toastService.removeAll();
		this.toastService.show(dangerTpl, {
			delay: 15000,
		});
	}

	qtyChange() {
		if (this.qty == null) {
			this.qty = 0;
		}
	}

	addToCart(dangerTpl) {
		this.qty++;
		this.showDanger(dangerTpl);
	}
}
