import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FilterDateComponent } from '../../components/filter-date/filter-date.component';
import { FilterDropdownComponent } from '../../components/filter-dropdown/filter-dropdown.component';

@Component({
	selector: 'approval-layout',
	templateUrl: './approval-layout.component.html',
	styleUrls: ['./approval-layout.component.scss'],
})
export class ApprovalLayoutComponent implements OnInit {
	@ViewChild(FilterDropdownComponent)
	filterDropdown: FilterDropdownComponent;
	@ViewChild(FilterDateComponent)
	filterDateDropdown: FilterDateComponent;
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
			name: 'Kantor Pertama Di Jalan Samudera',
			qty: 8,
		},
		{
			name: 'Kantor Cabang 2',
			qty: 0,
		},
		{
			name: 'Jl Kompleks Gelora Bung Karno Baru Jaksel No 45',
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
		var s = true;

		var i,
			n = this.items.length;
		for (i = 0; i < n; ++i) {
			if (this.items[i].available) {
				if (!this.items[i].cart) {
					s = false;
					break;
				}
			}
		}
		return s;
	}

	isAvailable(element, index, array) {
		return element.available;
	}

	resetButtonOnClick() {
		this.filterDropdown.resetSelected();
		this.filterDateDropdown.resetDate();
	}
}
