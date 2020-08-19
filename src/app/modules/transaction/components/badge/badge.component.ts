import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'badge',
	templateUrl: './badge.component.html',
	styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
	@Input() label;
	@Input() show;
	@Input() statusprocess;

	constructor() { }

	ngOnInit(): void {
		console.log(this.show);
	}

}
