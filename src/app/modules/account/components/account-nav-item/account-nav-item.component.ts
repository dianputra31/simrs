import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'account-nav-item',
	templateUrl: './account-nav-item.component.html',
	styleUrls: ['./account-nav-item.component.scss'],
})
export class AccountNavItemComponent implements OnInit {
	@Input() item: any;
	@Input() selected: String;
	constructor(private router: Router) {}

	hover;
	ngOnInit(): void {}

	navigate() {
		this.router.navigate(['./account/' + this.item.endPoint]);
	}

	over() {
		this.hover = true;
	}

	nothover() {
		this.hover = false;
	}
}
