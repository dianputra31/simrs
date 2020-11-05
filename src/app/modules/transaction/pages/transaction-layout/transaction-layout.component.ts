import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import {
	AddressList,
	GetCompanyUsers,
	RESPONSE,
	TransactionListUrl,
	TransactionStatusOptionUrl,
} from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { RedirectParameterService } from '../../../../layout/redirect-parameter.service';
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
	items: any[] = [];
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

	page: number = 1;
	limit: number = 5;

	data: any[];
	innerHeight: any;
	leftContainerHeight: any;
	rightContainerHeight: any;
	topFixed: any;
	headers: any;

	@ViewChild('inputKeyword') inputKeyword: FilterInputComponent;
	@ViewChild('inputDate') inputDate: RangeDatepickerComponent;

	@BlockUI() blockUI: NgBlockUI;

	constructor(
		private http: HttpService,
		private service: BaseService,
		private _redirectparam: RedirectParameterService
	) {}

	ngOnInit(): void {
		this.param = new TransactionListRequestModel();
		if (localStorage.getItem('selectedStatuses') !== '')
			this.param.status_code = localStorage.getItem('selectedStatuses');
		else this.param.status_code = 'ALL';
		this.selectedStatuses = localStorage.getItem('selectedStatuses');
		localStorage.setItem('selectedStatuses', this.selectedStatuses);
		this.subsribers = [];

		this.getTrxStatus();
	}

	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe());
	}
	onScroll(e) {
		console.log('scrolled!!', e);
		this.getTrxList(this.page++);
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
		this.selectedStatuses = localStorage.getItem(this.selectedStatuses);
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
				this.getTrxList(this.page);
			} else {
				this.service.showAlert(resp.status.msg);
			}
		});

		this.subsribers.push(sub);
	}

	getTrxList(ev) {
		console.log(this.page);
		if (localStorage.getItem('selectedStatuses') !== '')
			var statuscode = localStorage.getItem('selectedStatuses');
		else var statuscode = 'ALL';
		this.selectedStatuses = localStorage.getItem('selectedStatuses');

		const param = {
			status_code: statuscode,
			address_id: this.selectedAddress.id,
			user_id: this.selectedPurchaser.id,
			keyword: this.keyword,
			start_date: this.start_date,
			end_date: this.end_date,
			page: this.page,
			limit: this.limit,
		};

		this.blockUI.start();
		// console.log('param-get trxlist: ', param);
		const sub = this.http
			.post(TransactionListUrl, param)
			.subscribe((resp) => {
				this.blockUI.stop();
				if (resp.status.rc == RESPONSE.SUCCESS) {
					// this.items = resp.data;
					// console.log(this.items);
					// this.initScrolling();
					var newData = resp.data;
					this.items = this.items.concat(newData);
					this.initScrolling();
					// this.items = this.items.concat(newData);
				} else {
					this.service.showAlert(resp.status.msg);
				}
			});

		this.subsribers.push(sub);
	}

	selectStatus(status) {
		this.selectedStatus = status;
		// this._redirectparam.selectedbutton_transaksi = status.status_code;
		localStorage.setItem('selectedStatuses', status.status_code);
		this.getTrxList(this.page);
	}

	selectAddress(address) {
		this.items = [];
		this.selectedAddress = address;
		this.getTrxList(this.page);
	}

	selectPurchaser(purchaser) {
		this.items = [];
		this.selectedPurchaser = purchaser;
		this.getTrxList(this.page);
	}

	cariKeyword(keyword) {
		if (keyword.length >= 3 || keyword.length == 0) {
			this.items = [];
			this.keyword = keyword;
			this.getTrxList(this.page);
		}
	}

	filterDate(datenya) {
		this.items = [];
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

	initScrolling() {
		this.topFixed = document?.getElementById('top-fixed')?.offsetHeight;
		this.headers = document?.getElementById('headers')?.offsetHeight;

		this.onResize();
	}
	@HostListener('window:resize', ['$event'])
	onResize() {
		this.innerHeight = window.innerHeight;

		this.leftContainerHeight =
			this.innerHeight - this.topFixed - this.headers;
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
		this.page = 1;
		this.items = [];
		this.getTrxList(this.page);
	}
}
