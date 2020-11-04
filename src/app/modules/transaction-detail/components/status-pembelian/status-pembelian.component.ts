import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'status-pembelian',
	templateUrl: './status-pembelian.component.html',
	styleUrls: ['./status-pembelian.component.scss'],
})
export class StatusPembelianComponent implements OnInit {
	@Input() item: any;
	constructor() {}

	ngOnInit(): void {
		console.log(this.item);
	}
}
