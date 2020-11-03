import { Component, OnInit, ViewChild } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import {
	AddressList,
	GetCompanyUsers,
	RESPONSE,
	TransactionListUrl,
	TransactionStatusOptionUrl
} from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { RedirectParameterService } from '../../../../layout/redirect-parameter.service';
import { TransactionItemResponseModel } from '../../../../models/transaction-item-response.model';
import { TransactionListRequestModel } from '../../../../models/transaction-list-request.model';
import { FilterInputComponent } from '../../../../shared/components/filter-input/filter-input.component';
import { RangeDatepickerComponent } from '../../../../shared/components/range-datepicker/range-datepicker.component';

@Component({
	selector: 'transaction-layout',
	templateUrl: './transaction-layout.component.html',
	styleUrls: ['./transaction-layout.component.scss'],
})
export class TransactionLayoutComponent implements OnInit {
	subsribers: Subscription[];
	param: TransactionListRequestModel;
	items: TransactionItemResponseModel[];
	statuses: any[];
	selectedStatus: any;
	addresses: any[];
	selectedAddress: any;
	purchasers: any[];
	selectedPurchaser: any;
	selectedStatuses: any;

	keyword: string;
	start_date: string;
	end_date: string;

	@ViewChild('inputKeyword') inputKeyword: FilterInputComponent;
	@ViewChild('inputDate') inputDate: RangeDatepickerComponent;

	@BlockUI() blockUI: NgBlockUI;

	constructor(private http: HttpService, private service: BaseService, 
		private _redirectparam: RedirectParameterService ) {}

	ngOnInit(): void {
		this.param = new TransactionListRequestModel();
		if(this._redirectparam.selectedbutton_transaksi !== '') this.param.status_code = this._redirectparam.selectedbutton_transaksi; else this.param.status_code = 'ALL';
		this.selectedStatuses = this._redirectparam.selectedbutton_transaksi;
		this.subsribers = [];

		this.getTrxStatus();
	}

	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe());
	}

	getTrxStatus() {
		this.blockUI.start();
		const sub = this.http
			.post(TransactionStatusOptionUrl, {})
			.subscribe((resp) => {
				this.blockUI.stop();
				if (resp.status.rc == RESPONSE.SUCCESS) {
					this.statuses = resp.data;
					this.selectedStatus = this.statuses[0];
					this.getAddress();
				} else {
					this.service.showAlert(resp.status.msg);
				}
			});
		this.subsribers.push(sub);
	}

	getAddress() {
		this.blockUI.start();
		const sub = this.http.get(AddressList).subscribe((resp) => {
			this.blockUI.stop();
			if (resp.status.rc == RESPONSE.SUCCESS) {
				this.addresses = resp.data;

				this.addresses.forEach((each) => {
					each.label = each.address_name;
				});

				const x = {
					label: 'Semua',
					id: null,
				};

				this.addresses.splice(0, 0, x);

				this.selectedAddress = this.addresses[0];
				this.getPurchaserList();
			} else {
				this.service.showAlert(resp.status.msg);
			}
		});

		this.subsribers.push(sub);
	}

	getPurchaserList() {
		this.blockUI.start();
		const sub = this.http.get(GetCompanyUsers).subscribe((resp) => {
			this.blockUI.stop();
			if (resp.status.rc == RESPONSE.SUCCESS) {
				this.purchasers = resp.data;
				this.purchasers.forEach((each) => {
					each.label = each.fullname;
				});
				console.log(this.purchasers);
				const x = {
					label: 'Semua',
					id: null,
				};

				this.purchasers.splice(0, 0, x);

				this.selectedPurchaser = this.purchasers[0];
				this.getTrxList();
			} else {
				this.service.showAlert(resp.status.msg);
			}
		});

		this.subsribers.push(sub);
	}

	getTrxList() {
		if(this._redirectparam.selectedbutton_transaksi !== '') var statuscode = this._redirectparam.selectedbutton_transaksi; else var statuscode = 'ALL';
		this.selectedStatuses = this._redirectparam.selectedbutton_transaksi;
		
		const param = {
			status_code: statuscode,
			address_id: this.selectedAddress.id,
			user_id: this.selectedPurchaser.id,
			keyword: this.keyword,
			start_date: this.start_date,
			end_date: this.end_date,
			// page: 0,
			// limit: 20,
		};

		console.log(this.selectedStatus.status_code + ' ==> DIPILIH');
		console.log(this._redirectparam.selectedbutton_transaksi + ' ==> DISIMPAN');

		this.blockUI.start();
		console.log('param-get trxlist: ', param);
		const sub = this.http
			.post(TransactionListUrl, param)
			.subscribe((resp) => {
				this.blockUI.stop();
				if (resp.status.rc == RESPONSE.SUCCESS) {
					this.items = resp.data;
				} else {
					this.service.showAlert(resp.status.msg);
				}
			});

		this.subsribers.push(sub);
	}

	selectStatus(status) { 
		this.selectedStatus = status;
		this._redirectparam.selectedbutton_transaksi = status.status_code;
		this.getTrxList();
	}

	selectAddress(address) {
		this.selectedAddress = address;
		this.getTrxList();
	}

	selectPurchaser(purchaser) {
		this.selectedPurchaser = purchaser;
		this.getTrxList();
	}

	cariKeyword(keyword) {
		if (keyword.length >= 3 || keyword.length == 0) {
			this.keyword = keyword;
			this.getTrxList();
		}
	}

	filterDate(datenya) {
		this.start_date = datenya.startdate;
		this.end_date = datenya.enddate;
		console.log('mashok');
		console.log('test', this.start_date, this.end_date);
		this.getTrxStatus();
	}

	filterRemoved(datenya) {
		console.log('mashok2');
		this.start_date = datenya.startdate;
		this.end_date = datenya.enddate;
		console.log('test2', this.start_date, this.end_date);
		this.getTrxStatus();
	}

	reset() {
		this.selectedAddress = this.addresses[0];
		this.selectedPurchaser = this.purchasers[0];
		this.selectedStatus = this.statuses[0];

		this.keyword = '';
		this.inputKeyword.getKeyword('');

		this.inputDate.resetDate();
		this.start_date = null;
		this.end_date = null;

		this.getTrxList();
	}
}
