import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
	selector: 'box-cart-price',
	templateUrl: './box-cart-price.component.html',
	styleUrls: ['./box-cart-price.component.scss'],
})
export class BoxCartPriceComponent implements OnInit {
	@Input() buttonLabel: string;
	constructor(private router: Router) {}

	ngOnInit(): void {}

	clickButtonLabel() {
		if (this.buttonLabel == 'Selanjutnya') {
			this.router.navigate(['./request-approval']);
		} else if (this.buttonLabel == 'Request Approval') {
		}
	}
}
