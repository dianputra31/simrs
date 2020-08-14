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
	constructor() {}

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

	handleSelect(selected, index) {
		this.selected = selected;
		this.selectedIndex = index;
	}

	ngOnInit(): void {
		this.selected = this.listApprovals[0];
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
}
