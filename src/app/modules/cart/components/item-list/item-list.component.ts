import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../../../shared/toast/toast-service';

@Component({
	selector: 'item-list',
	templateUrl: './item-list.component.html',
	styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
	allowChanges = false;
	items = [{ outOfStock: true }, { outOfStock: false }];

	constructor(public toastService: ToastService) {}

	ngOnInit(): void {
		throw new Error('Method not implemented.');
	}

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
}
