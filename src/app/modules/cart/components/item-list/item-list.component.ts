import { Component, Input, OnInit } from '@angular/core';
import { ToastService } from '../../../../shared/toast/toast-service';

@Component({
	selector: 'item-list',
	templateUrl: './item-list.component.html',
	styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
	@Input() items;
	constructor(public toastService: ToastService) {}

	ngOnInit(): void {}

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
}
