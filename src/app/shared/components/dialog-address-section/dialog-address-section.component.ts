import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'dialog-address-section',
	templateUrl: './dialog-address-section.component.html',
	styleUrls: ['./dialog-address-section.component.scss']
})
export class DialogAddressSectionComponent implements OnInit {
	datalocation;

	constructor() { }

	ngOnInit(): void {

		this.datalocation =
			[
				{
					'address_name': 'Narindo',
					'address': 'JL. Boulevard Raya Graha Boulevard C-12 Kelapa Gading timur Rt.10 rw.15 Jakarta Utara 14240',
					'address_utama': 'Utama',
					'checked': 'checked',
				},
				{
					'address_name': 'Telkomsel Smart Office',
					'address': 'Telkomsel Smart Office, Telkom Landmark Tower, Jl. Jend. Gatot Subroto Kav. 52,	Jakarta Selatan 12710',
					'address_utama': '',
					'checked': '',
				}
			];

	}

}
