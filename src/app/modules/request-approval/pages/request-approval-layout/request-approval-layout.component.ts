import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

export let browserRefresh = false;

@Component({
	selector: 'request-approval-layout',
	templateUrl: './request-approval-layout.component.html',
	styleUrls: ['./request-approval-layout.component.scss']
})
export class RequestApprovalLayoutComponent implements OnInit {
	subscription: Subscription;


	constructor(private router: Router) {
		this.subscription = router.events.subscribe((event) => {
			if (event instanceof NavigationStart) {
				console.log("here");
				// browserRefresh = !router.navigated;
			} else {
				console.log("horas");
			}
		});
	}

	ngOnInit(): void {
	}

}
