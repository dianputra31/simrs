import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
	@Input() checked = false;
	@Output() onClicked = new EventEmitter();
	constructor() {}

	ngOnInit() {}

	checkboxClick() {
		this.checked = !this.checked;
		this.onClicked.emit(this.checked);
	}
}
