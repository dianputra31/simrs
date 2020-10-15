import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'status-label',
	templateUrl: './status-label.component.html',
	styleUrls: ['./status-label.component.scss'],
})
export class StatusLabelComponent implements OnInit {
	@Input() status: string;
	@Output() konfirmasiSelesaiEvent = new EventEmitter();

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
}
