import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'transaction-layout',
	templateUrl: './transaction-layout.component.html',
	styleUrls: ['./transaction-layout.component.scss']
})
export class TransactionLayoutComponent implements OnInit {

	param = {
		"address_id": 0,
		"user_id": 0,
		"keyword": "",
		"start_date": "",
		"end_date": "",
		"page": 0,
		"limit": 0
	}

	constructor() { }

	ngOnInit(): void {
		this.getTrxList(this.param)
	}

	getTrxList(param) {
		console.log("param-get trxlist: ", param)
	}
}
