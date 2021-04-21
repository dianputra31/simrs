import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'qty-ctrl-two',
	templateUrl: './qty-ctrl-two.component.html',
	styleUrls: ['./qty-ctrl-two.component.scss'],
})
export class QtyCtrlTwoComponent implements OnInit {
	@Input() initQty: number;
	@Output() onUpdateQty = new EventEmitter<number>();
	qty: any;
	cleanQty: number;

	constructor() {}

	max = 1000;

	timer;
	ngOnInit(): void {
		this.qty = this.initQty;

		if (this.qty == 1000) {
			this.qty = '1.000';
			this.cleanQty = this.qty.replace('.', '');
		} else {
			this.cleanQty = this.qty;
		}
	}

	removeOneFromCart() {
		if (typeof this.qty == 'string') {
			this.qty = this.qty?.replace('.', '');
		}

		if (this.qty > 1) {
			--this.qty;
			this.cleanQty = this.qty;
			this.updateQtyEvent();
		}
	}

	addOneToCart() {
		if (this.qty < this.max) {
			++this.qty;
		}

		if (this.qty == 1000) {
			this.qty = '1.000';
			this.cleanQty = this.qty.replace('.', '');
		} else {
			this.cleanQty = this.qty;
		}

		this.updateQtyEvent();
	}

	onChange() {
		clearTimeout(this.timer);
		this.timer = setTimeout(() => {
			if (this.qty < 1 || this.qty == null) {
				this.qty = 1;
			} else if (this.qty > this.max) {
				this.qty = this.max;
			}

			if (this.qty == 1000) {
				this.qty = '1.000';
				this.cleanQty = this.qty.replace('.', '');
			} else {
				if (typeof this.qty == 'string' && this.qty != '') {
					this.qty = this.qty.replace('.', '');
				}
				this.cleanQty = this.qty;
			}

			this.updateQtyEvent();
		}, 1000);
	}

	updateQtyEvent() {
		this.onUpdateQty.emit(this.cleanQty);
	}
}
