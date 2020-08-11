import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'list-status-section',
	templateUrl: './list-status-section.component.html',
	styleUrls: ['./list-status-section.component.scss'],
})
export class ListStatusSectionComponent implements OnInit {
	statuses = ['Semua', 'Diproses', 'Ditolak', 'Dibatalkan', 'Selesai'];
	constructor() {}
	selected = '';
	ngOnInit(): void {
		this.selected = this.statuses[0];
	}
}
