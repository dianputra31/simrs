import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'label-with-notif',
	templateUrl: './label-with-notif.component.html',
	styleUrls: ['./label-with-notif.component.scss'],
})
export class LabelWithNotifComponent implements OnInit {
	@Input() label: String;
	@Input() badge: String;
	constructor() {}

	ngOnInit(): void {}
}
