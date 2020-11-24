import { Component, Input, OnInit } from '@angular/core';


@Component({
	selector: 'tagihan-table',
	templateUrl: './tagihan-table.component.html',
	styleUrls: ['./tagihan-table.component.scss'],
})
export class TagihanTableComponent implements OnInit {
	@Input() items:any;

	constructor() {}

	ngOnInit(): void {
		
	}

	
}
