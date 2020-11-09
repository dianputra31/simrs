import { Component, OnInit } from '@angular/core';
import { EmailCs } from '../../../../app/app.constant';

@Component({
	selector: 'app-email-button',
	templateUrl: './email-button.component.html',
	styleUrls: ['./email-button.component.scss'],
})
export class EmailButtonComponent implements OnInit {
	constructor() {}
	email: string = EmailCs;

	

	ngOnInit(): void {
	}

}
