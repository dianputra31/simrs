import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'filter-buttons-section',
	templateUrl: './filter-buttons-section.component.html',
	styleUrls: ['./filter-buttons-section.component.scss'],
})
export class FilterButtonsSectionComponent implements OnInit {
	@Input() param: any;

	constructor() {}

	ngOnInit(): void {}

	test(keyword) {
		console.log('param: ', this.param);
		console.log(keyword);

		this.param.keyword = keyword;

		console.log('this-keyword: ', this.param.keyword);
	}

	updateUserId(user_id) {
		this.param.user_id = user_id;
	}

	updateDeliveryAddress(address_id) {
		this.param.address_id = address_id;
	}

	updateDate(date) {
		this.param.start_date = date.startdate;
		this.param.end_date = date.enddate;
	}
}
