import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BaseService } from '../../../../core/base-service/service/base.service';

@Component({
	selector: 'chart-dropdown',
	templateUrl: './chart-dropdown.component.html',
	styleUrls: ['./chart-dropdown.component.scss'],
})
export class ChartDropdownComponent implements OnInit {
	addresses = [];
	@Input() selected: any;
	@Input() placeholderText: String;
	@Input() idText: string;
	subsribers: Subscription[];
	@Output() onSelect = new EventEmitter<any>();

	constructor(private router: Router, private service: BaseService) {}

	public edited = true;
	items = [
		{
			label: 'Mingguan',
			range: 'WEEKLY',
		},
		{
			label: 'Bulanan',
			range: 'MONTHLY',
		},
	];

	ngOnInit(): void {
		this.selected = this.items[1];
		this.subsribers = [];
	}

	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe);
	}

	selectItem(item) {
		this.selected = item;
		this.onSelect.emit(item);
		console.log('itemnya', item);
	}

	hidePlaceholder(a) {
		this.edited = false;
	}
}
