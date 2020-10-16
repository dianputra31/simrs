import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AddressListUrl, ApprovalCount } from '../../../../app.constant';
import { StorageService } from '../../../../core/storage/service/storage.service';

@Component({
	selector: 'approval-layout',
	templateUrl: './approval-layout.component.html',
	styleUrls: ['./approval-layout.component.scss'],
})
export class ApprovalLayoutComponent implements OnInit {
	@Inject(DOCUMENT) private _document: Document;
	@BlockUI() blockUI: NgBlockUI;
	subscribers: Subscription[] = [];

	nNotApproved: number;
	listSummaryByAddress: any[];
	selectedAddress: any;
	constructor(
		private http: HttpClient,
		private storageService: StorageService
	) {}

	ngOnInit(): void {
		this.getAddress();
		this.numberOfApproval();
	}

	ngOnDestroy() {
		this.subscribers.forEach((each) => each.unsubscribe);
	}

	getAddress() {
		this.blockUI.start();
		const sub = this.http
			.get(AddressListUrl)
			.pipe(
				map((resp: any): any => {
					return resp;
				}),
				catchError((err, caught: Observable<HttpEvent<any>>) => {
					if (err instanceof HttpErrorResponse && err.status == 401) {
						this.storageService.clear();
						this._document.defaultView.location.reload();
						return of(err as any);
					}
					throw err;
				})
			)
			.subscribe((resp) => {
				this.blockUI.stop();
				this.listSummaryByAddress = resp.data;
				this.selectedAddress = resp.data[0];
			});

		this.subscribers.push(sub);
	}

	numberOfApproval() {
		this.blockUI.start();
		const sub = this.http
			.post(ApprovalCount, {})

			.pipe(
				map((resp: any): any => {
					return resp;
				}),
				catchError((err, caught: Observable<HttpEvent<any>>) => {
					if (err instanceof HttpErrorResponse && err.status == 401) {
						this.storageService.clear();
						this._document.defaultView.location.reload();
						return of(err as any);
					}
					throw err;
				})
			)
			.subscribe((resp) => {
				this.blockUI.stop();
				this.nNotApproved = resp.data.approval_count;
			});
		this.subscribers.push(sub);
	}

	selectAddressGroup(i) {
		this.selectedAddress = i;
	}
}
