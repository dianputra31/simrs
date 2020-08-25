import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'rekap-tagihan',
	templateUrl: './rekap-tagihan.component.html',
	styleUrls: ['./rekap-tagihan.component.scss']
})
export class RekapTagihanComponent implements OnInit {
	username;
	company;
	address;

	constructor() { }

	ngOnInit(): void {
		this.username = 'Firman Taher';
		this.company = 'PT Narindo Solusi Telekomunikasi';
		this.address = 'Jalan Merpati I no. 23, Kemang Jakarta Selatan, 12320 - DKI Jakarta Telp. 0812 3456 7890';
	}

}
