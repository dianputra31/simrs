import { Component, Input, OnInit } from '@angular/core';
import { ToastService } from '../../../../shared/toast/toast-service';
import { ProductDetailResponseModel } from '../../models/product-detail-response.model';

@Component({
	selector: 'price',
	templateUrl: './price.component.html',
	styleUrls: ['./price.component.scss'],
})
export class PriceComponent implements OnInit {
	@Input() productDetail: ProductDetailResponseModel;
	@Input() qtyObject: any;
	constructor(public toastService: ToastService) {}

	ngOnInit(): void {}

	test(h: string) {
		console.log(h);
	}
}
