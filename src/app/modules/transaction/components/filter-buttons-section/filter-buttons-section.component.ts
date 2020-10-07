import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'filter-buttons-section',
	templateUrl: './filter-buttons-section.component.html',
	styleUrls: ['./filter-buttons-section.component.scss'],
})
export class FilterButtonsSectionComponent implements OnInit {
	ngOnInit(): void {
		throw new Error('Method not implemented.');
	}

	@Input() param: any;
	@Output() onParamUpdate = new EventEmitter();

	constructor() {}

	test(keyword) {
		console.log('param: ', this.param);
		console.log(keyword);

		this.param.keyword = keyword;

		this.onParamUpdate.emit();
	}

	updateUserId(user_id) {
		this.param.user_id = user_id;
	}

	updateDeliveryAddress(address_id) {
		this.param.address_id = address_id;
		this.onParamUpdate.emit();
	}

	updateDate(date) {
		this.param.start_date = date.startdate;
		this.param.end_date = date.enddate;
		this.onParamUpdate.emit();
	}
}
