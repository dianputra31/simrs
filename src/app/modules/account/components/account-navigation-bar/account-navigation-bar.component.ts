import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'account-navigation-bar',
	templateUrl: './account-navigation-bar.component.html',
	styleUrls: ['./account-navigation-bar.component.scss'],
})
export class AccountNavigationBarComponent implements OnInit {
	navItems = [
		{
			label: 'Dashboard',
			endPoint: '',
		},
		{
			label: 'Informasi Personal',
			endPoint: 'info-personal',
		},
		{
			label: 'Informasi Perusahaan',
			endPoint: 'info-perusahaan',
		},
		{
			label: 'Kredit Perusahaan',
			endPoint: 'kredit-perusahaan',
		},
		{
			label: 'Tagihan',
			endPoint: 'tagihan',
		},
		{
			label: 'Mengelola Purchaser',
			endPoint: 'kelola-purchaser',
		},
		{
			label: 'Log out',
			endPoint: 'logout',
		},
	];

	selected;
	constructor() {}

	ngOnInit(): void {
		this.selected = this.navItems[0];
	}

	selectItem(item) {
		this.selected = item;
	}
}
