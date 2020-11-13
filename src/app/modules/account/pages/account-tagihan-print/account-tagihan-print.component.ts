import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { InvoicePrint } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';

@Component({
	selector: 'account-tagihan-print',
	templateUrl: './account-tagihan-print.component.html',
	styleUrls: ['./account-tagihan-print.component.scss'],
})
export class AccountTagihanPrintComponent implements OnInit {
	slideHtml;
	subsribers: Subscription[] = [];
	constructor(
		private route: ActivatedRoute,
		private service: HttpService,
		@Inject(DOCUMENT) private _document: Document
	) {}

	ngOnInit(): void {
		// this._Activatedroute.paramMap.subscribe((params) => {
		// 	console.log(params.params.invoice_no);
		// });

		const sub = this.service
			.get(
				InvoicePrint + '/' + this.route.snapshot.params['invoice_no'],
				{
					responseType: 'text',
				}
			)
			.subscribe((resp) => {
				this._document.getElementById('scroll').innerHTML = resp;
			});
		this.subsribers.push(sub);
	}
}
