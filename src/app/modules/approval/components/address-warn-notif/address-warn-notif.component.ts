import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'address-warn-notif',
	templateUrl: './address-warn-notif.component.html',
	styleUrls: ['./address-warn-notif.component.scss']
})
export class AddressWarnNotifComponent implements OnInit {
	@Input() label;
	@Input() selected;
	@Output() diklik = new EventEmitter<any>()

	constructor() { }

	ngOnInit(): void {
	}

}
