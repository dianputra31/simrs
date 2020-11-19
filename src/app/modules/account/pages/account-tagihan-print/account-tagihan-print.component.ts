import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import { InvoicePrint } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';

@Component({
	selector: 'account-tagihan-print',
	templateUrl: './account-tagihan-print.component.html',
	styleUrls: ['./account-tagihan-print.component.scss'],
})
export class AccountTagihanPrintComponent implements OnInit {
	@BlockUI() blockUI: NgBlockUI;
	subsribers: Subscription[] = [];
	constructor(
		private route: ActivatedRoute,
		private service: HttpService,
		private dialogService: BaseService,
		@Inject(DOCUMENT) private _document: Document
	) {}

	ngOnInit(): void {
		// this._Activatedroute.paramMap.subscribe((params) => {
		// 	console.log(params.params.invoice_no);
		// });

		this.blockUI.start();
		const sub = this.service
			.get(
				InvoicePrint + '/' + this.route.snapshot.params['invoice_no'],
				{
					responseType: 'text',
				}
			)
			.subscribe(
				(resp) => {
					this.blockUI.stop();
					console.log('responsenya', resp);
					this._document.getElementById('scroll').innerHTML = resp;
					// this._document.getElementById('scroll').innerHTML =
				},
				(error) => {
					this.blockUI.stop();
					this.service.handleError(error);
				}
			);
		this.subsribers.push(sub);
	}

	addPdf() {
		console.log('bisa pdf');
	}
	addPrint() {
		console.log('bisa print');
	}
}
