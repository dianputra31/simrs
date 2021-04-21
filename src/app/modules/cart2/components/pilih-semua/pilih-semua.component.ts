import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'pilih-semua',
	templateUrl: './pilih-semua.component.html',
	styleUrls: ['./pilih-semua.component.scss'],
})
export class PilihSemuaComponent implements OnInit {
	@Output() onPilihSemuaCheckboxClick = new EventEmitter<boolean>();
	constructor() {}

	ngOnInit(): void {}
	handleClickCheckbox(value) {
		this.onPilihSemuaCheckboxClick.emit(value);
	}
}
