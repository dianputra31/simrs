import { Component,Input, OnInit } from '@angular/core';

@Component({
	selector: 'footer-customer-support',
	templateUrl: './footer-customer-support.component.html',
	styleUrls: ['./footer-customer-support.component.scss'],
})
export class FooterCustomerSupportComponent implements OnInit {
	@Input() titleTwo: String;
	constructor() {}

	ngOnInit() {}
}
