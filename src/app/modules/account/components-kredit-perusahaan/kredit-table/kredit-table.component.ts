import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HistoryMutation } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';

@Component({
	selector: 'kredit-table',
	templateUrl: './kredit-table.component.html',
	styleUrls: ['./kredit-table.component.scss']
})
export class KreditTableComponent implements OnInit {
	subsribers: Subscription[];
	hist;
	param = {
		page: 1,
		limit: 30
	}

	constructor(private service: BaseService,
	) { }

	ngOnInit(): void {


		const sub = this.service
			.postData(HistoryMutation, false, false, false)
			.subscribe((resp) => {
				console.log(resp.data);
				var tc = resp.data.length;
				if (parseInt(tc) > 0) {
					document.getElementById('item-count').innerText =
						resp.data.length;
					this.hist = resp.data;
				} else {
					document.getElementById('item-count').innerText = '';
					document
						.getElementById('item-count')
						.classList.remove('show');
				}
			});
		this.subsribers.push(sub);
	}

	//   http://172.16.204.6:8081/history/mutation?page=1&limit=10



}
