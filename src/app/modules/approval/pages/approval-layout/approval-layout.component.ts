import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'approval-layout',
	templateUrl: './approval-layout.component.html',
	styleUrls: ['./approval-layout.component.scss'],
})
export class ApprovalLayoutComponent implements OnInit {
	@ViewChild('widgetsContent', { read: ElementRef })
	public widgetsContent: ElementRef<any>;

	selected;
	selectedIndex;
	pilihSemua = false;
	constructor() {}
	items = [
		{
			item: '1',
			available: true,
			cart: true,
		},
		{
			item: '2',
			available: false,
			cart: false,
		},
		{
			item: '3',
			available: true,
			cart: true,
		},
	];

	listApprovals = [
		{
			name: 'Kantor Pusat',
			qty: 10,
		},
		{
			name: 'Kantor Cabang 1',
			qty: 8,
		},
		{
			name: 'Kantor Cabang 2',
			qty: 0,
		},
		{
			name: 'Kantor Cabang 3',
			qty: 0,
		},
		{
			name: 'Kantor Cabang 4',
			qty: 6,
		},
		{
			name: 'Kantor Cabang 5',
			qty: 0,
		},
		{
			name: 'Kantor Cabang 6',
			qty: 2,
		},
	];

	handleSelect(selected) {
		this.selected = selected;
	}

	ngOnInit(): void {
		this.selected = this.listApprovals[0];
		this.handlePilihSemua();
	}

	scrollLeft() {
		this.widgetsContent.nativeElement.scrollTo({
			left: this.widgetsContent.nativeElement.scrollLeft - 150,
			behavior: 'smooth',
		});
		console.log('to the left');
	}

	scrollRight() {
		this.widgetsContent.nativeElement.scrollTo({
			left: this.widgetsContent.nativeElement.scrollLeft + 150,
			behavior: 'smooth',
		});
		console.log('to the right');
	}

	handlePilihSemua() {
		var i,
			n = this.items.length;
		for (i = 0; i < n; ++i) {
			if (this.items[i].available) {
				this.items[i].cart = this.pilihSemua;
			}
		}
		this.pilihSemua = !this.pilihSemua;
	}

	handlePilihSemuaStatus(): Boolean {
		return false;
	}

	isAvailable(element, index, array) {
		return element.available;
	}
}
