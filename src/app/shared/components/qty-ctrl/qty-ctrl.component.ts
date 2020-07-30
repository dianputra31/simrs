import { Component, Input, OnInit } from '@angular/core';
import { ToastService } from '../../toast/toast-service';

@Component({
	selector: 'qty-ctrl',
	templateUrl: './qty-ctrl.component.html',
	styleUrls: ['./qty-ctrl.component.scss'],
})
export class QtyCtrlComponent implements OnInit {
	@Input() notif: string;
	@Input() allowChanges: boolean;

	qty = 1;
	constructor(public toastService: ToastService) {}

	ngOnInit(): void {}

	removeFromCart() {
		if (this.allowChanges) {
			if (this.qty != 1) {
				this.qty--;
			}
		}
	}

	qtyChange() {
		if (this.qty == null || this.qty < 1) {
			this.qty = 1;
		}
	}

	addToCart() {
		if (this.allowChanges) {
			if (this.qty != 999999) {
				this.qty++;
			}
		}
	}

	preventAlphabet(event: KeyboardEvent) {
		const pattern = /[0-9]/;
		const inputChar = String.fromCharCode(event.keyCode);

		if (!pattern.test(inputChar)) {
			event.preventDefault();
		}
	}
}
