import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'status-pesanan',
	templateUrl: './status-pesanan.component.html',
	styleUrls: ['./status-pesanan.component.scss']
})
export class StatusPesananComponent implements OnInit {
	statusprocess;

	constructor() { }

	ngOnInit(): void {
		this.statusprocess = "Selesai";
	}

}
