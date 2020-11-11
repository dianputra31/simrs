import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'qty-ctrl-two',
	templateUrl: './qty-ctrl-two.component.html',
	styleUrls: ['./qty-ctrl-two.component.scss'],
})
export class QtyCtrlTwoComponent implements OnInit {
	@Input() initQty: number;
	@Output() onUpdateQty = new EventEmitter<number>();
	qty: number;
	constructor() {}

	max = 1000;

	ngOnInit(): void {
		this.qty = this.initQty;
	}

	removeOneFromCart() {
		if (this.qty > 1) {
			this.qty--;
			this.updateQtyEvent();
		}
	}

	addOneToCart() {
		if (this.qty < this.max) {
			this.qty++;
			this.updateQtyEvent();
		}
	}

	onChange() {
		setTimeout(() => {
			if (this.qty < 1 || this.qty == null) {
				this.qty = 1;
			} else if (this.qty > this.max) {
				this.qty = this.max;
			}
			this.updateQtyEvent();
		}, 2000);
	}

	updateQtyEvent() {
		this.onUpdateQty.emit(this.qty);
	}
}
