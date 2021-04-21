import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'footer-bar',
	templateUrl: './footer-bar.component.html',
	styleUrls: ['./footer-bar.component.scss'],
})
export class FooterBarComponent implements OnInit {
	divemail;
	windowWidth;

	middle;
	cslogo;
	redWidth;
	footerinnerwrapper;
	minimumRedWidth;
	constructor(private router: Router) {}

	ngOnInit(): void {
		if (this.router.url == '/home') {
			this.divemail = 'kotakemail';
		} else {
			this.divemail = 'kotakemail-hide';
		}
	}

	ngAfterViewInit() {
		setTimeout(() => {
			this.onResize();
		}, 1000);
	}

	@HostListener('window:resize', ['$event'])
	onResize() {
		this.middle = document?.getElementById('middle')?.offsetWidth;
		this.cslogo = document?.getElementById('cs-logo')?.offsetWidth;
		this.footerinnerwrapper = document?.getElementById(
			'footer-inner-wrapper'
		)?.offsetWidth;
		this.minimumRedWidth = 200;
		this.windowWidth = window.innerWidth;

		this.redWidth =
			40 +
			this.windowWidth -
			this.middle -
			this.cslogo -
			(this.windowWidth - this.footerinnerwrapper) / 2;

		// if (this.redWidth < this.minimumRedWidth) {
		// 	this.redWidth = this.minimumRedWidth;
		// }
	}
}
