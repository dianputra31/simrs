import { Component, Input, OnInit } from '@angular/core';


@Component({
	selector: 'kredit-table',
	templateUrl: './kredit-table.component.html',
	styleUrls: ['./kredit-table.component.scss']
})
export class KreditTableComponent implements OnInit {
	@Input() items:any;
	



	constructor(

	) { }

	ngOnInit(): void {

		
	}

	


}
