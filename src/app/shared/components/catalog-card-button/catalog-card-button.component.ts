import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
	selector: 'catalog-card-button',
	templateUrl: './catalog-card-button.component.html',
	styleUrls: ['./catalog-card-button.component.scss'],
})
export class CatalogCardButtonComponent implements OnInit {
	private readonly notifier: NotifierService;
	qty: any = 0;
	show: boolean = true;

	constructor(notifierService: NotifierService) {
		this.notifier = notifierService;
	}

	ngOnInit() {}

	removeFromCart() {
		if (this.qty != 0) this.qty--;
	}

	addToCart() {
		this.qty++;
		this.notifier.notify('success', 'You are awesome! I mean it!');
	}

	qtyChange() {
		if (this.qty == null) {
			this.qty = 0;
		}
	}
}
