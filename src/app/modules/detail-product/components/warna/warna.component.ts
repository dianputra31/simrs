import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'warna',
	templateUrl: './warna.component.html',
	styleUrls: ['./warna.component.scss'],
})
export class WarnaComponent implements OnInit {
	colors = ['#B71A30', '#6EBA62', '#196EBC', '#ACA6A7', '#FFFFFF'];
	selectedColor = '#B71A30';
	constructor() { }

	ngOnInit(): void { }
}
