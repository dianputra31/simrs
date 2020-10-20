import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HistoryMutation } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';

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

	constructor(private service: HttpService,
	) { }

	ngOnInit(): void {


		const sub = this.service.post(HistoryMutation, this.param)
			.subscribe((resp) => {
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



}
