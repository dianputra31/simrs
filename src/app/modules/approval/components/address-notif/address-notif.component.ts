import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'address-notif',
	templateUrl: './address-notif.component.html',
	styleUrls: ['./address-notif.component.scss']
})
export class AddressNotifComponent implements OnInit {
	@Input() label;
	@Input() selected;
	@Output() diklik = new EventEmitter<any>()

	constructor() { }

	ngOnInit(): void {
	}

	klik() {
		this.diklik.emit(this.label);

	}

}
