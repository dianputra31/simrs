import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'header-category-button',
	templateUrl: './header-category-button.component.html',
	styleUrls: ['./header-category-button.component.scss'],
})
export class HeaderCategoryButtonComponent implements OnInit {
	categories = ['Baju Pria', 'Baju Wanita', 'Baju Bayi'];
	clickedCategory = 'Baju Pria';

	subcategories = [
		'Kemeja',
		'Kaos',
		'Celana',
		'Celana Pendek',
		'Jas',
		'Topi',
		'Dasi',
		'Kacamata',
		'Jogger Pants',
	];

	constructor(private router: Router) {}

	ngOnInit() {}
}
