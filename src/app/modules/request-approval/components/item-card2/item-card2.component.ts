import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileUrl } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import {
	REQUEST_APPROVAL_STATUS,
	REQUEST_APPROVAL_STATUS_DICT,
} from '../../request-approval.constant';

@Component({
	selector: 'item-card2',
	templateUrl: './item-card2.component.html',
	styleUrls: ['./item-card2.component.scss'],
})
export class ItemCard2Component implements OnInit {
	datauser;

	@Input() item: any;
	constructor(private http: HttpService, private router: Router) {}

	ngOnInit(): void {
		const sub = this.http.get(ProfileUrl, '').subscribe((resp) => {
			this.datauser = resp.data.profile;
		});
	}

	blurItem() {
		return this.item.status !== REQUEST_APPROVAL_STATUS_DICT.OK;
	}

	status() {
		var x = REQUEST_APPROVAL_STATUS.find(
			(s) => s.status == this.item.status
		);
		return x?.display;
	}

	onImgError(event) {
		event.target.src = '../../../../assets/image/icons/default-item.png';
	}

	itemClicked() {
		this.router.navigate([
			'./detail-product/' + this.item.partner_sku_item,
		]);
	}
}
