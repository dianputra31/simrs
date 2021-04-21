import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'address-with-notif',
	templateUrl: './address-with-notif.component.html',
	styleUrls: ['./address-with-notif.component.scss'],
})
export class AddressWithNotifComponent implements OnInit {
	@Input() item: any;
	@Input() selected: any;
	@Output() onClick = new EventEmitter();
	constructor() {}

	ngOnInit(): void {}

	klik() {
		this.onClick.emit();
	}
}
