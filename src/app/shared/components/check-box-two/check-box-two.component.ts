import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'check-box-two',
	templateUrl: './check-box-two.component.html',
	styleUrls: ['./check-box-two.component.scss'],
})
export class CheckBoxTwoComponent implements OnInit {
	@Input() initialValue: boolean;
	@Input() allowChanges: boolean;
	@Output() onClickEvent = new EventEmitter<boolean>();

	checked: boolean;
	constructor() {}

	ngOnInit(): void {
		this.checked = this.initialValue;
	}

	onClick() {
		if (this.allowChanges) {
			this.checked = !this.checked;
			this.onClickEvent.emit(this.checked);
		}
	}
}
