// import { DOCUMENT } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
// import { BlockUI, NgBlockUI } from 'ng-block-ui';
// import { Subscription } from 'rxjs';
// import { HistoryMutation, ProfileUrl, RESPONSE } from '../../../../app.constant';
// import { HttpService } from '../../../../core/base-service/http.service';
// import { BaseService } from '../../../../core/base-service/service/base.service';

@Component({
	selector: 'kredit-table',
	templateUrl: './kredit-table.component.html',
	styleUrls: ['./kredit-table.component.scss']
})
export class KreditTableComponent implements OnInit {
	@Input() items:any;
	// subsribers: Subscription[];
	// hist;
	// param = {
	// 	page: 1,
	// 	limit: 30
	// }

	
	// innerHeight: any;
	// leftContainerHeight: any;
	// rightContainerHeight: any;
	// topFixed: any;
	// headers: any;
	// isSpinner: Boolean = false;
	// selector: string = '#left-container';
	// limit: number = 30;
	// page: number = 1;
	// totalPages: number;
	// @BlockUI() blockUI: NgBlockUI;
	// limitkredit;
	// sisakreditnya;


	// @Inject(DOCUMENT) private _document: Document;


	constructor(
		// private service: HttpService,
		// private servis: BaseService,
	) { }

	ngOnInit(): void {

		// console.log("Here we go: " + this.items);
		// this.getBase(this.page);
		// this.getSummary();

		// const body = document.getElementsByTagName('body')[0];

		
	}

	


}
