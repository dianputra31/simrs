import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BaseService } from '../../../core/base-service/service/base.service';

@Component({
	selector: 'input-dropdown',
	templateUrl: './input-dropdown.component.html',
	styleUrls: ['./input-dropdown.component.scss'],
})
export class InputDropdownComponent implements OnInit {
	addresses = [];
	@Input() items: any;
	@Input() selected: any;
	@Input() placeholderText: String;
	subsribers: Subscription[];
	@Output() onSelect = new EventEmitter<any>();

	constructor(private router: Router, private service: BaseService) {}

	ngOnInit(): void {
		this.subsribers = [];
	}

	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe);
	}

	selectItem(item) {
		this.selected = item;
		this.onSelect.emit(item);
	}
}
