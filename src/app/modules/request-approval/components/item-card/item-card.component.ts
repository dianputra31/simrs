import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartListElement } from '../../../../models/cart-list.model';
import { REQUEST_APPROVAL_STATUS } from '../../request-approval.constant';

@Component({
	selector: 'item-card',
	templateUrl: './item-card.component.html',
	styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
	datacart;
	@Input() item: CartListElement;
	hoho;
	styles;
	classObj = {};

	@Input() redirlink;
	boolean = false;

	constructor(private router: Router) {}
	ngOnInit(): void {
		if (this.redirlink) this.styles = 'redirectdetail';
		else this.styles = 'redirectdetailnot';
	}

	goToDetail() {
		if (this.redirlink) {
			this.router.navigate([]).then((result) => {
				window.open('./detail-product', '_blank');
			});
		} else {
			console.log('unclickable');
		}
	}

	status(availability) {
		var x = REQUEST_APPROVAL_STATUS.find((s) => s.status == availability);
		return x?.display;
	}
}
