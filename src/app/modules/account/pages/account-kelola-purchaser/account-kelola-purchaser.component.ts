import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'account-kelola-purchaser',
	templateUrl: './account-kelola-purchaser.component.html',
	styleUrls: ['./account-kelola-purchaser.component.scss'],
})
export class AccountKelolaPurchaserComponent implements OnInit {
	showAddPurchaserEditor: Boolean;
	constructor() {}

	ngOnInit(): void {
		this.showAddPurchaserEditor = false;
	}

	addPurchaser() {
		this.showAddPurchaserEditor = !this.showAddPurchaserEditor;
	}
}
