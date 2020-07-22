import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'catalog-card',
	templateUrl: './catalog-card.component.html',
	styleUrls: ['./catalog-card.component.scss'],
})
export class CatalogCardComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}

	backToHome() {
		this.router.navigate(['./detail-product']);
	}
}
