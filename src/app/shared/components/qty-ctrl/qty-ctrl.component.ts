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
		this.qty = this.sanitizedNumber(this.qty);
		if (this.allowChanges) {
			if (this.qty != 1) {
				this.qty--;
				this.qty = this.formatRupiah(this.qty.toString(), '');
			}
		}
	}

	qtyChange() {
		if (this.qty == null || this.qty < 1) {
			this.qty = 1;
		}
	}

	addToCart() {
		this.qty = this.sanitizedNumber(this.qty);
		if (this.allowChanges) {
			if (this.qty != 999999) {
				this.qty++;
				this.qty = this.formatRupiah(this.qty.toString(), '');
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

	formatNumbersss() {
		this.qty = this.formatRupiah(this.qty, '');
	}

	formatRupiah(angka, prefix) {
		var separator;
		var number_string = angka.replace(/[^,\d]/g, '').toString(),
			split = number_string.split(','),
			sisa = split[0].length % 3,
			rupiah = split[0].substr(0, sisa),
			ribuan = split[0].substr(sisa).match(/\d{3}/gi);

		// tambahkan titik jika yang di input sudah menjadi angka ribuan
		if (ribuan) {
			separator = sisa ? '.' : '';
			rupiah += separator + ribuan.join('.');
		}

		rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
		return prefix == undefined ? rupiah : rupiah ? rupiah : '';
	}

	sanitizedNumber(angka) {
		return angka.toString().replace('.', '');
	}
}
