import { Component, Input, OnInit } from '@angular/core';
import { TRANSACTION_STATUS_DICT } from '../../../../app.constant';

@Component({
	selector: 'status-alasan',
	templateUrl: './status-alasan.component.html',
	styleUrls: ['./status-alasan.component.scss'],
})
export class StatusAlasanComponent implements OnInit {
	@Input() item: any;
	processes: any[];
	constructor() {}

	ngOnInit(): void {
		// this.createProcess();
	}

	showStatusLabel() {
		return (
			this.item?.status == TRANSACTION_STATUS_DICT.CANCEL ||
			this.item?.status == TRANSACTION_STATUS_DICT.OUTOFSTOCK ||
			this.item?.status == TRANSACTION_STATUS_DICT.REJECTED ||
			this.item?.status == TRANSACTION_STATUS_DICT.WAITING_RETURN
		);
	}

	// ORDERED : Order sudah diapprove oleh manager / icon
	// PROCESS : Sudah dikonfirmasi oleh supplier / icon
	// CANCEL : Dibatalkan /status n alasan
	// PENDING : (status sementara) Sedang ada kendala di supplier/di delivery  / status n alasan
	// DELIVER: Sedang diantarkan / icon
	// RECEIVED: Sudah sampai tujuan / icon
	// CLOSED: Barang yg diterima sudah dikonfirmasi / icon

	// 	<!-- <img src="../../../../../assets/image/icons/dikirim-grey.svg">
	// <img src="../../../../../assets/image/icons/dikirim-red.svg">
	// <img src="../../../../../assets/image/icons/sampai-grey.svg">
	// <img src="../../../../../assets/image/icons/sampai-red.svg">
	// <img src="../../../../../assets/image/icons/selesai-grey.svg">
	// <img src="../../../../../assets/image/icons/selesai-red.svg"> -->
}
