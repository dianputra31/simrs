import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'status-button',
	templateUrl: './status-button.component.html',
	styleUrls: ['./status-button.component.scss'],
})
export class StatusButtonComponent implements OnInit {
	@Input() label: any;
	@Input() selected: string; 
	constructor() { }

	ngOnInit(): void {
	 }
}
