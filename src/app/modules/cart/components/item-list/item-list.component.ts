import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../../../shared/toast/toast-service';

@Component({
	selector: 'item-list',
	templateUrl: './item-list.component.html',
	styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
	items = [
		{ outOfStock: false, selected: true },
		{ outOfStock: false, selected: true },
		{ outOfStock: true, selected: false },
	];

	pilihSemuaStatus: boolean;

	constructor(public toastService: ToastService) {}

	ngOnInit(): void {
		this.apakahSemuaItemTerpilih();

		this.pilihSemuaStatus = false;
		this.pilihSemuaEventHandler();
		console.log(this.pilihSemuaStatus);
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

	pilihSemuaEventHandler() {
		if (this.pilihSemuaStatus) {
			this.pilihSemuaStatus = false;
			for (var index in this.items) {
				var item = this.items[index];

				item.selected = false;
			}
		} else {
			this.pilihSemuaStatus = true;
			for (var index in this.items) {
				var item = this.items[index];
				if (!item.outOfStock) {
					item.selected = true;
				}
			}
		}
	}

	shouldSelectItem(outOfStock, selected) {
		if (outOfStock) {
			return false;
		} else {
			return selected;
		}
	}

	apakahSemuaItemTerpilih() {
		var pilihSemuaStatus = true;
		for (var index in this.items) {
			var item = this.items[index];
			if (!item.outOfStock) {
				if (!item.selected) {
					pilihSemuaStatus = false;
				}
			}
		}
		this.pilihSemuaStatus = pilihSemuaStatus;
		return pilihSemuaStatus;
	}
}
