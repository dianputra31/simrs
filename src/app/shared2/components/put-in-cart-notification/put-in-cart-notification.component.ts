import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
	selector: 'put-in-cart-notification',
	templateUrl: './put-in-cart-notification.component.html',
	styleUrls: ['./put-in-cart-notification.component.scss'],
})
export class PutInCartNotificationComponent implements OnInit {
	@Input() product;
	@Input() quantity = 0;
	@Input() total = 0;

	show = false;
	constructor(private router: Router) {}

	ngOnInit() {}

	showNotif() {
		this.show = true;

		const numbers = interval(1000);
		const a = numbers.pipe(take(4));
		a.subscribe((x) => {
			if (x == 3) {
				this.show = false;
			}
		});
	}

	pergiKeKeranjang() {
		this.router.navigate(['./cart']);
	}
}
