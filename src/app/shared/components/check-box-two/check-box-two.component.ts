import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'check-box-two',
	templateUrl: './check-box-two.component.html',
	styleUrls: ['./check-box-two.component.scss'],
})
export class CheckBoxTwoComponent implements OnInit {
	@Input() checked: boolean;
	@Input() allowChanges: boolean;
	@Input() detSupplier: string;
	@Input() detDate: string;
	@Input() detPurchaser: string;
	@Input() buttonAvail: boolean;
	@Output() onClickEvent = new EventEmitter<boolean>();

	constructor() {}

	ngOnInit(): void {}

	onClick() {
		if (this.allowChanges) {
			this.checked = !this.checked;
			this.onClickEvent.emit(this.checked);
		}
	}
}
