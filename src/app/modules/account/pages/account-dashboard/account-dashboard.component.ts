import { Component, OnInit, ViewChild } from '@angular/core';
import { format, subMonths } from 'date-fns';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import {
	DashboardPerMonth,
	DashboardPerProduct,
	DashboardPerPurchaser,
	RESPONSE,
} from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { RedirectParameterService } from '../../../../layout/redirect-parameter.service';
import { RangeDatepickerComponent } from '../../../../shared/components/range-datepicker/range-datepicker.component';
import { OutputGraphComponent } from '../../components/output-graph/output-graph.component';

@Component({
	selector: 'account-dashboard',
	templateUrl: './account-dashboard.component.html',
	styleUrls: ['./account-dashboard.component.scss'],
})
export class AccountDashboardComponent implements OnInit {
	@BlockUI() blockUI: NgBlockUI;
	@ViewChild('inputgetData') inputgetData: OutputGraphComponent;
	purchasers = [];
	range: string = 'MONTHLY';
	start_date: string = '';
	end_date: string = '';
	company_id;
	tahun: number;
	years: string = '2020';

	purchaserss: any[];
	selectedPurchaser: any;

	items_month: any[] = [];
	items_purchaser: any[] = [];
	items_product: any[] = [];
	subscribers: Subscription[] = [];

	@ViewChild('inputDate') inputDate: RangeDatepickerComponent;
	@ViewChild('inputFilter') inputFilter: OutputGraphComponent;

	constructor(
		private http: HttpService,
		private service: BaseService,
		private _redirectparam: RedirectParameterService
	) {}

	ngOnInit() {
		this.getDefaultRange();
		// this.getSummaryMonth();
		// this.getSummaryPurchaser();
		// this.getSummaryProduct();
		// this.purchaser_list();
		// this.onChange;
	}
	ngOnDestroy() {
		this.subscribers.forEach((each) => each.unsubscribe());
	}

	getDefaultRange() {
		var result = subMonths(new Date(), 6);
		var result1 = new Date();
		this.start_date = format(result, 'yyyy-MM-dd');
		this.end_date = format(result1, 'yyyy-MM-dd');
		console.log('result', result, result1);
		this.getSummaryMonth();
		this.getSummaryPurchaser();
		this.getSummaryProduct();
		this.purchaser_list();
		this.onChange;
	}
	selectPurchaser(purchaser) {
		this.range = purchaser.range;
		this.selectedPurchaser = purchaser;
		console.log('purchaser', this.range);
		this.getSummaryMonth();
	}
	purchaser_list() {
		this.company_id = JSON.parse(
			localStorage.getItem('profile')
		).company_id;
		console.log('c', this.company_id);
	}
	onChange(result: Date): void {
		this.getSummaryMonth();
		this.getSummaryPurchaser();
		this.getSummaryProduct();
	}

	filterDate(datenya) {
		this.start_date = datenya.startdate;
		this.end_date = datenya.enddate;
		console.log('start', this.start_date);
		console.log('end', this.end_date);
		this.getSummaryMonth();
		this.getSummaryPurchaser();
		this.getSummaryProduct();
	}

	filterRemoved(datenya) {
		this.start_date = datenya.startdate;
		this.end_date = datenya.enddate;
		this.getSummaryMonth();
		this.getSummaryPurchaser();
		this.getSummaryProduct();
	}

	getSummaryMonth() {
		this.blockUI.start();
		var url =
			DashboardPerMonth +
			'?start_date=' +
			this.start_date +
			'&end_date=' +
			this.end_date +
			'&opt_range=' +
			this.range +
			'&company_id=' +
			this.company_id;
		console.log('url', url);
		var param = {};
		const sub = this.http.post(url, param).subscribe(
			(resp) => {
				var result = subMonths(new Date(), 6);
				console.log('result', result);
				console.log('responnya', resp);
				this.blockUI.stop();
				if (resp.status.rc == RESPONSE.SUCCESS) {
					this.items_month = resp.data;
				} else {
					this.service.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.blockUI.stop();
				this.http.handleError(error);
			}
		);
		this.subscribers.push(sub);
	}
	getSummaryPurchaser() {
		this.blockUI.start();
		var url =
			DashboardPerPurchaser +
			'?start_date=' +
			this.start_date +
			'&end_date=' +
			this.end_date +
			'&company_id=' +
			this.company_id;
		var param = {};
		console.log('idnya', url);
		const sub = this.http.post(url, param).subscribe(
			(resp) => {
				this.blockUI.stop();
				if (resp.status.rc == RESPONSE.SUCCESS) {
					this.items_purchaser = resp.data;
					console.log('purchaser', this.items_purchaser);
				} else {
					this.service.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.blockUI.stop();
				this.http.handleError(error);
			}
		);
		this.subscribers.push(sub);
	}
	getSummaryProduct() {
		this.blockUI.start();
		var url =
			DashboardPerProduct +
			'?start_date=' +
			this.start_date +
			'&end_date=' +
			this.end_date +
			'&company_id=' +
			this.company_id;
		var param = {};
		const sub = this.http.post(url, param).subscribe(
			(resp) => {
				console.log(resp);
				this.blockUI.stop();
				if (resp.status.rc == RESPONSE.SUCCESS) {
					this.items_product = resp.data;
					console.log('product', this.items_product);
				} else {
					this.service.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.blockUI.stop();
				this.http.handleError(error);
			}
		);
		this.subscribers.push(sub);
	}
	reset() {
		// this.selectedAddress = this.listSummaryByAddress[0];
		this.items_month = [];
	}
}
