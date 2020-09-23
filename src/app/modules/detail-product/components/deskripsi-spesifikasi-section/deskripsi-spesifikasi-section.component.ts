import { Component, Input, OnInit } from '@angular/core';
import { ProductDetailResponseModel } from '../../models/product-detail-response.model';

@Component({
	selector: 'deskripsi-spesifikasi-section',
	templateUrl: './deskripsi-spesifikasi-section.component.html',
	styleUrls: ['./deskripsi-spesifikasi-section.component.scss'],
})
export class DeskripsiSpesifikasiSectionComponent implements OnInit {
	@Input() productDetail: ProductDetailResponseModel;
	selectedTab = 'Deskripsi';
	constructor() {}

	ngOnInit(): void {}
}
