import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
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
	itemListHeight: any;
	rightContainerHeight: any;
	topFixed: any;
	headers: any;
	isSpinner: Boolean = false;

	selector: string = '#item-list';
	@ViewChild('inputKeyword') inputKeyword: FilterInputComponent;
	@ViewChild('inputDate') inputDate: RangeDatepickerComponent;

	@BlockUI() blockUI: NgBlockUI;

	constructor(
		private http: HttpService,
		private service: BaseService,
		private dialog: MatDialog,
		private _redirectparam: RedirectParameterService
	) {}

	ngOnInit(): void {
		const body = document.getElementsByTagName('body')[0];
		body.classList.add('no-scroll');

		this.param = new TransactionListRequestModel();

		this.subsribers = [];
		this.getTrxStatus();
	}

	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe());

		const body = document.getElementsByTagName('body')[0];
		body.classList.remove('no-scroll');
	}
	onScroll(e) {
		this.page++;
		this.getTrxList();
	}
	getTrxStatus() {
		this.blockUI.start();
		const sub = this.http.post(TransactionStatusOptionUrl, {}).subscribe(
			(resp) => {
				this.blockUI.stop();
				if (resp.status.rc == RESPONSE.SUCCESS) {
					this.statuses = resp.data;
					this.selectedStatus = this.statuses[0];
					this.getAddress();
				} else {
					this.service.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.blockUI.stop();
				this.http.handleError(error);
			}
		);

		this.subsribers.push(sub);
	}

	getAddress() {
		this.blockUI.start();
		const sub = this.http.get(AddressList).subscribe(
			(resp) => {
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
			},
			(error) => {
				this.blockUI.stop();
				this.http.handleError(error);
			}
		);

		this.subsribers.push(sub);
	}

	getPurchaserList() {
		this.blockUI.start();
		const sub = this.http.get(GetCompanyUsers).subscribe(
			(resp) => {
				this.blockUI.stop();
				if (resp.status.rc == RESPONSE.SUCCESS) {
					this.purchasers = resp.data;
					this.purchasers.forEach((each) => {
						each.label = each.fullname;
					});
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
			},
			(error) => {
				this.blockUI.stop();
				this.http.handleError(error);
			}
		);

		this.subsribers.push(sub);
	}

	getTrxList() {
		if (localStorage.getItem('selectedStatuses'))
			this.selectedStatuses = localStorage.getItem('selectedStatuses');
		else this.selectedStatuses = 'ALL';

		const param = {
			status_code: this.selectedStatuses,
			address_id: this.selectedAddress.id,
			user_id: this.selectedPurchaser.id,
			keyword: this.keyword,
			start_date: this.start_date,
			end_date: this.end_date,
			page: this.page,
			limit: this.limit,
		};

		this.isSpinner = true;

		const sub = this.http.post(TransactionListUrl, param).subscribe(
			(resp) => {
				this.isSpinner = false;
				if (resp.status.rc == RESPONSE.SUCCESS) {
					var newData = resp.data;
					this.items = this.items.concat(newData);
					this.initScrolling();
				} else {
					this.service.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.isSpinner = false;
				this.http.handleError(error);
			}
		);

		this.subsribers.push(sub);
	}

	selectStatus(status) {
		this.selectedStatus = status;
		this.items = [];
		this.page = 1;
		localStorage.setItem('selectedStatuses', status.status_code);
		this.getTrxList();
	}

	selectAddress(address) {
		this.items = [];
		this.page = 1;
		this.selectedAddress = address;
		this.getTrxList();
	}

	selectPurchaser(purchaser) {
		this.items = [];
		this.page = 1;
		this.selectedPurchaser = purchaser;
		this.getTrxList();
	}

	cariKeyword(keyword) {
		if (keyword.length >= 3 || keyword.length == 0) {
			this.items = [];
			this.page = 1;
			this.keyword = keyword;
			this.getTrxList();
		}
	}

	filterDate(datenya) {
		this.items = [];
		this.page = 1;
		this.start_date = datenya.startdate;
		this.end_date = datenya.enddate;
		this.getTrxStatus();
	}

	filterRemoved(datenya) {
		this.start_date = datenya.startdate;
		this.end_date = datenya.enddate;
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

		this.itemListHeight = this.innerHeight - this.topFixed - this.headers;
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
		this.getTrxList();
	}
}
