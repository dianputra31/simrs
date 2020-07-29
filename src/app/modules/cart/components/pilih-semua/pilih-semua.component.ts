import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'pilih-semua',
	templateUrl: './pilih-semua.component.html',
	styleUrls: ['./pilih-semua.component.scss'],
})
export class PilihSemuaComponent implements OnInit {
	@Input() semuaTerpilih: boolean;
	@Output() onPilihSemua = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	pilihSemua() {
		this.onPilihSemua.emit();
	}
}
