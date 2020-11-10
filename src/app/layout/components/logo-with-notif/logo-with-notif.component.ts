import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'logo-with-notif',
	templateUrl: './logo-with-notif.component.html',
	styleUrls: ['./logo-with-notif.component.scss'],
})
export class LogoWithNotifComponent implements OnInit {
	@Input() badge;
	constructor() {}

	ngOnInit(): void {}
}
