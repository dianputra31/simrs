import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
	TransactionListUrl,
	TransactionStatusOptionUrl,
} from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { TransactionItemResponseModel } from '../../../../models/transaction-item-response.model';
import { TransactionListRequestModel } from '../../../../models/transaction-list-request.model';
import { TransactionStatusOptionResponseModel } from '../../../../models/transaction-status-option-response.model';

@Component({
	selector: 'transaction-layout',
	templateUrl: './transaction-layout.component.html',
	styleUrls: ['./transaction-layout.component.scss'],
})
export class TransactionLayoutComponent implements OnInit {
	subsribers: Subscription[];
	param: TransactionListRequestModel;
	items: TransactionItemResponseModel[];
	constructor(private http: HttpClient, private service: BaseService) {}

	ngOnInit(): void {
		this.param = new TransactionListRequestModel();
		this.param.status_code = 'ALL';
		// this.param.address_id = null;
		// this.param.end_date = null;
		// this.param.keyword = null;
		// this.param.limit = null;
		// this.param.page = null;
		// this.param.start_date = null;
		// this.param.user_id = null;
		this.subsribers = [];

		// this.getTrxList();
	}

	getTrxStatus() {
		const sub = this.http
			.post(TransactionStatusOptionUrl, this.param)
			.pipe(
				map((resp: any): any => {
					return resp;
				}),
				catchError((err, caught: Observable<HttpEvent<any>>) => {
					if (err instanceof HttpErrorResponse && err.status == 401) {
						// this.storageService.clear();
						// this._document.defaultView.location.reload();
						return of(err as any);
					}
					throw err;
				})
			)
			.subscribe((resp) => {
				console.log(resp);
			});

		// map((model: HttpBodyRespModel): any => {
		// 	console.log(responseModel.convert);
		// 	return responseModel
		// 		? isArray
		// 			? this.mapArrayData(model.data, responseModel)
		// 			: responseModel.convert(model.data)
		// 		: this.responseData(model.data);
		// })
	}

	getTrxList() {
		console.log('param-get trxlist: ', this.param.convert());

		const sub = this.service
			.postData2(
				TransactionListUrl,
				this.param,
				TransactionItemResponseModel,
				null,
				true
			)
			.subscribe((resp) => {
				this.items = resp;
				console.log(resp);
			});
		this.subsribers.push(sub);
	}

	handleSelectStatus(status: TransactionStatusOptionResponseModel) {
		this.param.status_code = status.status_code;
		this.getTrxList();
	}
}
