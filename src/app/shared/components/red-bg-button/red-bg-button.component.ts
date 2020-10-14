import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'red-bg-button',
	templateUrl: './red-bg-button.component.html',
	styleUrls: ['./red-bg-button.component.scss'],
})
export class RedBgButtonComponent implements OnInit {
  @Input() label: String = 'test';
	constructor() { }

	ngOnInit(): void { }
}
