import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'catalog-card-button',
	templateUrl: './catalog-card-button.component.html',
	styleUrls: ['./catalog-card-button.component.scss'],
})
export class CatalogCardButtonComponent implements OnInit {
	qty: any = 0;
	show: boolean = true;

	constructor(private toastr: ToastrService) {}

	ngOnInit() {}

	removeFromCart() {
		if (this.qty != 0) this.qty--;
	}

	addToCart() {
		this.qty++;
		this.toastr.success("Hello, I'm the toastr message.");
	}

	qtyChange() {
		if (this.qty == null) {
			this.qty = 0;
		}
	}
}
