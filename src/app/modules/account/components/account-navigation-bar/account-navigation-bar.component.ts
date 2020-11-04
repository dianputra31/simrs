import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { StorageService } from '../../../../core/storage/service/storage.service';

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
	constructor(
		public storageService: StorageService,
		@Inject(DOCUMENT) private _document: Document
	) {}

	ngOnInit(): void {
		this.selected = localStorage.getItem('selectedInfo');
		// this.selected = this.navItems[0];
	}

	selectItem(item) {
		if (item.endPoint == 'logout') {
			this.storageService.clear();
			this._document.defaultView.location.reload();
		}
		this.selected = item.label;
		localStorage.setItem('selectedInfo', item.label);
	}
}
