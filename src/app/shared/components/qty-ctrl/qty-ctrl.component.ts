import { Component, Input, OnInit } from '@angular/core';
import { ToastService } from '../../toast/toast-service';

@Component({
	selector: 'qty-ctrl',
	templateUrl: './qty-ctrl.component.html',
	styleUrls: ['./qty-ctrl.component.scss'],
})
export class QtyCtrlComponent implements OnInit {
	@Input() notif: string;
	@Input() allowChanges: string;

	qty = 0;
	constructor(public toastService: ToastService) {}

	ngOnInit(): void {}

	removeFromCart(dangerTpl) {
		if (this.allowChanges == 'true') {
			if (this.qty != 0) {
				this.qty--;
				this.showDanger(dangerTpl);
			}
		}
	}

	showDanger(dangerTpl) {
		if (this.notif === 'true') {
			this.toastService.removeAll();
			this.toastService.show(dangerTpl, {
				delay: 15000,
			});
		}
	}

	qtyChange() {
		if (this.qty == null) {
			this.qty = 0;
		}
	}

	addToCart(dangerTpl) {
		if (this.allowChanges == 'true') {
			this.qty++;
			this.showDanger(dangerTpl);
		}
	}
}
