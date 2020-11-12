import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuantityModel } from '../../../models/quantity.model';
import { ToastService } from '../../toast/toast-service';
@Component({
	selector: 'qty-ctrl',
	templateUrl: './qty-ctrl.component.html',
	styleUrls: ['./qty-ctrl.component.scss'],
})
export class QtyCtrlComponent implements OnInit {
	@Input() notif: string;
	@Input() allowChanges: boolean;
	@Input() qtyObject: QuantityModel = new QuantityModel();
	@Output() qtyChangeEvent = new EventEmitter<number>();

	qtyToDisplay;
	constructor(public toastService: ToastService) { }

	ngOnInit(): void {
		this.qtyObject.qtyDisplay = this.qtyObject.display().length > 0 ? this.qtyObject.display() : "0";
	}

	removeFromCart() {
		this.qtyObject.qty = this.qtyObject.sanitizedNumber();
		if (this.allowChanges) {
			if (this.qtyObject.qty != 1) {
				this.qtyObject.qty--;
				this.qtyObject.qtyDisplay = this.qtyObject.display();
			}
		}
	}

	qtyChange() {
		if (this.qtyObject.qty == null || this.qtyObject.qty < 1 || this.qtyObject.qtyDisplay == "0") {
			this.qtyObject.qty = 1;
			this.qtyObject.qtyDisplay = "1";
			alert("here")
		}
	}

	addToCart() {
		this.qtyObject.qty = this.qtyObject.sanitizedNumber();
		if (this.allowChanges) {
			if (this.qtyObject.qty != 999999) {
				this.qtyObject.qty++;
				this.qtyObject.qtyDisplay = this.qtyObject.display();
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
		console.log(this.qtyObject.qtyDisplay)
		if(this.qtyObject.qtyDisplay=='0') {
			this.qtyObject.qtyDisplay = "1";
			this.qtyObject.qty = 1;
			console.log(this.qtyObject.qty)
		}
		this.qtyObject.qtyDisplay = this.formatRupiah(
			this.qtyObject.qtyDisplay,
			''
		);

		this.qtyObject.qty = this.qtyObject.sanitizedNumber();
		
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
}
