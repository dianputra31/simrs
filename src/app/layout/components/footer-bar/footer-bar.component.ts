import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'footer-bar',
	templateUrl: './footer-bar.component.html',
	styleUrls: ['./footer-bar.component.scss'],
})
export class FooterBarComponent implements OnInit {
	divemail;

	constructor(private router: Router) { }

	ngOnInit(): void {
		if (this.router.url == '/home') {
			this.divemail = 'kotakemail';
		} else {
			this.divemail = 'kotakemail-hide';
		}
	}
}
