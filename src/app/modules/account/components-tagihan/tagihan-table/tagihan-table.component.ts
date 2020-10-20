import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TagihanCompany } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';


@Component({
	selector: 'tagihan-table',
	templateUrl: './tagihan-table.component.html',
	styleUrls: ['./tagihan-table.component.scss']
})
export class TagihanTableComponent implements OnInit {
	tagihanHist;
	subsribers: Subscription[];

	constructor(private service: BaseService) { }

	ngOnInit(): void {
		const sub = this.service
			.postData(TagihanCompany, false, false, false)
			.subscribe((resp) => {
				var tc = resp.data.length;
				// console.log(resp.data);
				if (parseInt(tc) > 0) {
					this.tagihanHist = resp.data;
				}
			});
		this.subsribers.push(sub);

	}

} 
