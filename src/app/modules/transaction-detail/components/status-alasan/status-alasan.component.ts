import { Component, Input, OnInit } from '@angular/core';

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
			this.item?.status == 'CANCEL' ||
			this.item?.status == 'PENDING' ||
			this.item?.status == 'OUTOFSTOCK' ||
			this.item?.status == 'REJECTED'
		);
	}

	createProcess() {
		this.processes = [];
		var o = {
			image: '../../../../../assets/image/icons/diproses-red.svg',
			date: this.item?.item_status_history?.filter(
				(x) => x.status == 'PROCESS'
			)[0]?.updated_at,
		};

		var i = {
			image: '../../../../../assets/image/icons/dikirim-grey.svg',
			date: '',
		};

		var z = {
			image: '../../../../../assets/image/icons/sampai-grey.svg',
			date: '',
		};

		var a = {
			image: '../../../../../assets/image/icons/selesai-grey.svg',
			date: '',
		};

		if (this.item?.status == 'DELIVERY') {
			i.image = '../../../../../assets/image/icons/dikirim-red.svg';
			i.date = this.item?.item_status_history?.filter(
				(x) => x.status == 'DELIVERY'
			)[0]?.updated_at;
		} else if (this.item?.status == 'RECEIVED') {
			i.image = '../../../../../assets/image/icons/dikirim-red.svg';
			i.date = this.item?.item_status_history?.filter(
				(x) => x.status == 'DELIVERY'
			)[0]?.updated_at;

			z.image = '../../../../../assets/image/icons/sampai-red.svg';
			z.date = this.item?.item_status_history?.filter(
				(x) => x.status == 'RECEIVED'
			)[0]?.updated_at;
		} else if (this.item?.status == 'CLOSED') {
			i.image = '../../../../../assets/image/icons/dikirim-red.svg';
			i.date = this.item?.item_status_history?.filter(
				(x) => x.status == 'DELIVERY'
			)[0]?.updated_at;

			z.image = '../../../../../assets/image/icons/sampai-red.svg';
			z.date = this.item?.item_status_history?.filter(
				(x) => x.status == 'RECEIVED'
			)[0]?.updated_at;

			a.image = '../../../../../assets/image/icons/selesai-red.svg';
			a.date = this.item?.item_status_history?.filter(
				(x) => x.status == 'CLOSED'
			)[0]?.updated_at;
		}

		this.processes.push(o);
		this.processes.push(i);
		this.processes.push(z);
		this.processes.push(a);

		return this.processes;
	}

	a = '../../../../../assets/image/icons/selesai-red.svg';
	v = '2020-10-22T11:27:56';
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
