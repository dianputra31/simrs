import { Component, Input, OnInit } from '@angular/core';
import { ProductDetailResponseModel } from '../../models/product-detail-response.model';

@Component({
	selector: 'image-price-section',
	templateUrl: './image-price-section.component.html',
	styleUrls: ['./image-price-section.component.scss'],
})
export class ImagePriceSectionComponent implements OnInit {
	@Input() productDetail: ProductDetailResponseModel;
	@Input() qtyObject: any;
	constructor() {}

	ngOnInit(): void {}
}
