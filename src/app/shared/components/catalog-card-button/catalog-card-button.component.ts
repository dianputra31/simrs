import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../toast/toast-service';

@Component({
	selector: 'catalog-card-button',
	templateUrl: './catalog-card-button.component.html',
	styleUrls: ['./catalog-card-button.component.scss'],
})
export class CatalogCardButtonComponent implements OnInit {
	qty: any = 0;
	show: boolean = true;
	constructor(public toastService: ToastService) {}

	ngOnInit() {}

	removeFromCart(dangerTpl) {
		if (this.qty != 0) {
			this.qty--;
			this.showDanger(dangerTpl);
		}
	}

	addToCart(dangerTpl) {
		this.qty++;
		this.showDanger(dangerTpl);
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
}
