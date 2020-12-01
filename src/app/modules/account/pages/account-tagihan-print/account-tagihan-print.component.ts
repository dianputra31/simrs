import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
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
	data: string;
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
					this.data = resp;
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
		var data = document.getElementById('scroll');
		html2canvas(data).then((canvas) => {
			var imgWidth = 208;
			var imgHeight = (canvas.height * imgWidth) / canvas.width;
			console.log('height', imgHeight);
			const contentDataURL = canvas.toDataURL('image/png');
			let pdf = new jspdf('p', 'mm', 'a4');
			var position = 0;
			pdf.addImage(
				contentDataURL,
				'PNG',
				0,
				position,
				imgWidth,
				imgHeight
			);
			pdf.save('invoice.pdf');
		});
	}
	addPrint() {
		// const printContent = document.getElementById('scroll');
		// const WindowPrt = window.open(
		// 	'',
		// 	'',
		// 	'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0'
		// );
		// WindowPrt.document.write(printContent.innerHTML);
		// WindowPrt.document.close();
		// WindowPrt.focus();
		// WindowPrt.print();
		// WindowPrt.close();
		var clientHeight = document.getElementById('scroll').clientHeight;
		let printContents = document.getElementById('scroll').innerHTML;
		let originalContents = document.body.innerHTML;
		console.log('test', clientHeight)
		document.body.innerHTML = printContents;
		window.focus();
		window.print();
		window.close();

		window.location.reload();
	}
}
