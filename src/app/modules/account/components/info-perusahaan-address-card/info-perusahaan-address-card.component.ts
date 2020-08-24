import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'info-perusahaan-address-card',
	templateUrl: './info-perusahaan-address-card.component.html',
	styleUrls: ['./info-perusahaan-address-card.component.scss'],
})
export class InfoPerusahaanAddressCardComponent implements OnInit {
	@Input() utama: Boolean;
	constructor() {}

	ngOnInit(): void {}
}
