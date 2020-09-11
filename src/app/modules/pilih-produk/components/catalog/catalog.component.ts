import { Component, Input, OnInit } from '@angular/core';
import { CatalogResponseModel } from '../../../../models/catalog-response-model';

@Component({
	selector: 'app-catalog',
	templateUrl: './catalog.component.html',
	styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
	@Input() items: CatalogResponseModel;
	constructor() {}

	ngOnInit(): void {}
}
