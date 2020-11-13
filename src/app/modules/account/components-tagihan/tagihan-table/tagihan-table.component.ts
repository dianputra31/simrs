import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TagihanCompany } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';

@Component({
	selector: 'tagihan-table',
	templateUrl: './tagihan-table.component.html',
	styleUrls: ['./tagihan-table.component.scss'],
})
export class TagihanTableComponent implements OnInit {
	tagihanHist;
	subsribers: Subscription[] = [];

	param = {
		page: 1,
		limit: 30,
	};

	constructor(private service: HttpService, private router: Router) {}

	ngOnInit(): void {
		const sub = this.service
			.post(TagihanCompany, this.param)
			.subscribe((resp) => {
				var tc = resp.data.length;
				if (parseInt(tc) > 0) {
					this.tagihanHist = resp.data;
				}
			});
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
