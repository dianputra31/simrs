import { Component, Input, OnInit } from '@angular/core';
import { TransactionDetailModel } from '../../../../models/transaction-detaily-response.model';

@Component({
	selector: 'status-pembelian',
	templateUrl: './status-pembelian.component.html',
	styleUrls: ['./status-pembelian.component.scss'],
})
export class StatusPembelianComponent implements OnInit {
	@Input() item: TransactionDetailModel;
	constructor() {}

	ngOnInit(): void {
		console.log(this.item);
	}
	
}
