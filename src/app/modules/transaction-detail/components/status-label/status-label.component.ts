import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TRANSACTION_STATUS_DICT } from '../../../../app.constant';

@Component({
	selector: 'status-label',
	templateUrl: './status-label.component.html',
	styleUrls: ['./status-label.component.scss'],
})
export class StatusLabelComponent implements OnInit {
	@Input() status: string;
	@Input() statusTranslated: string;
	@Output() konfirmasiSelesaiEvent = new EventEmitter();
	@Output() cariSejenisEvent = new EventEmitter();
	@Output() ajukanLagiEvent = new EventEmitter();

	// ORDERED : Order sudah diapprove oleh manager / Selesai (abu-abu)
	// PROCESS : Sudah dikonfirmasi oleh supplier / Selesai (abu-abu)
	// CANCEL : Dibatalkan / Ajukan lagi (merah)
	// PENDING : (status sementara) Sedang ada kendala di supplier/di delivery  / Selesai (abu-abu)
	// DELIVER: Sedang diantarkan / Selesai (abu-abu)
	// RECEIVED: Sudah sampai tujuan / Selesai (merah)
	// CLOSED: Barang yg diterima sudah dikonfirmasi / Beli Lagi (merah)
	constructor() {}

	ngOnInit(): void {}

	confirmOrder() {
		this.konfirmasiSelesaiEvent.emit();
	}

	cariSejenis() {
		this.cariSejenisEvent.emit();
	}

	ajukanLagi() {
		this.ajukanLagiEvent.emit();
	}

	tampilkanSelesaiAbu2() {
		return (
			this.status == TRANSACTION_STATUS_DICT.ORDERED ||
			this.status == TRANSACTION_STATUS_DICT.PENDING ||
			this.status == TRANSACTION_STATUS_DICT.PROCESS ||
			this.status == TRANSACTION_STATUS_DICT.DELIVER
		);
	}
	tampilkanSelesaiMerah() {
		return this.status == TRANSACTION_STATUS_DICT.RECEIVED;
	}
	tampilkanBeliLagi() {
		return this.status == TRANSACTION_STATUS_DICT.CLOSED;
	}
	tampilkanAjukanLagi() {
		return this.status == TRANSACTION_STATUS_DICT.REJECTED;
	}
	tampilkanCariSejenis() {
		return (
			this.status == TRANSACTION_STATUS_DICT.OUTOFSTOCK ||
			this.status == TRANSACTION_STATUS_DICT.CANCEL
		);
	}
}
