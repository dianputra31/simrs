import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import { RESPONSE, TagihanCompany } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';

@Component({
	selector: 'tagihan-table',
	templateUrl: './tagihan-table.component.html',
	styleUrls: ['./tagihan-table.component.scss'],
})
export class TagihanTableComponent implements OnInit {
	@BlockUI() blockUI: NgBlockUI;
	tagihanHist;
	subsribers: Subscription[] = [];

	param = {
		page: 1,
		limit: 30,
	};

	constructor(
		private service: HttpService,
		private router: Router,
		private dialogService: BaseService
	) {}

	ngOnInit(): void {
		this.blockUI.start();
		const sub = this.service.post(TagihanCompany, this.param).subscribe(
			(resp) => {
				this.blockUI.stop();
				if (resp.status.rc == RESPONSE.SUCCESS) {
					var tc = resp.data.length;
					if (parseInt(tc) > 0) {
						this.tagihanHist = resp.data;
					}
				} else {
					this.dialogService.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.blockUI.stop();
				this.service.handleError(error);
			}
		);

		this.subsribers.push(sub);
	}

	ngOnDestroy() {
		this.subsribers.forEach((x) => x.unsubscribe());
	}

	slideHtml;
	lihatTagihanDetail(tagihan) {
		this.router.navigate(['./account/tagihan-print/' + tagihan.invoice_no]);
		console.log(tagihan);
	}
}
