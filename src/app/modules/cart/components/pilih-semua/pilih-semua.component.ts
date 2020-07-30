import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'pilih-semua',
	templateUrl: './pilih-semua.component.html',
	styleUrls: ['./pilih-semua.component.scss'],
})
export class PilihSemuaComponent implements OnInit {
	@Output() onPilihSemua = new EventEmitter<boolean>();
	@Input() items;
	pilihSemuaStatus;

	constructor() {}

	ngOnInit(): void {}

	pilihSemua() {
		this.onPilihSemua.emit(this.pilihSemuaStatus);
	}

	apakahSemuaItemTerpilih() {
		this.pilihSemuaStatus = true;
		for (var index in this.items) {
			var item = this.items[index];
			if (!item.outOfStock) {
				if (!item.selected) {
					this.pilihSemuaStatus = false;
				}
			}
		}
		return this.pilihSemuaStatus;
	}
}
