import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'info-personal-row',
	templateUrl: './info-personal-row.component.html',
	styleUrls: ['./info-personal-row.component.scss'],
})
export class InfoPersonalRowComponent implements OnInit {
	@Input() label: String;
	@Input() content: String;
	@Input() isEditting: Boolean;
	@Input() ids: String;
	@Output() firstnameEdit = new EventEmitter;
	@Output() lastnameEdit = new EventEmitter;
	@Output() changed = new EventEmitter;
	constructor() { }

	ngOnInit(): void { }

	mbel(a, b) {
		if (b === 'firstname') this.firstnameEdit.emit(a.content);
		if (b === 'lastname') this.lastnameEdit.emit(a.content);
	}
}
