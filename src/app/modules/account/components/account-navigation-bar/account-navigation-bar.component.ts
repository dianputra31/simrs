import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
			endPoint: 'dashboard',
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
		private router: Router,
		public storageService: StorageService,
		@Inject(DOCUMENT) private _document: Document
	) {}

	ngOnInit(): void {
		this.selected = this.navItems.filter(
			(x) => x.endPoint == this.router.url.replace('/account/', '')
		)[0];
	}

	selectItem(item) {
		if (item.endPoint == 'logout') {
			this.storageService.clear();
			this._document.defaultView.location.reload();
		}
		this.selected = item;
		// this.selected = item.label;
		// localStorage.setItem('selectedInfo', item.label);
	}
}
