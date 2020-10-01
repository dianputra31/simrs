import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddCart } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { CartItemRequestModel } from '../../../../models/cart-item-request.model';
import { CartItemResponseModel } from '../../../../models/cart-item-response.model';
import { CartItemModel } from '../../../../models/cart-item.model';
import { QuantityModel } from '../../../../models/quantity.model';
import { ToastService } from '../../../../shared/toast/toast-service';
import { ProductDetailResponseModel } from '../../models/product-detail-response.model';

@Component({
	selector: 'floating-footer',
	templateUrl: './floating-footer.component.html',
	styleUrls: ['./floating-footer.component.scss'],
})
export class FloatingFooterComponent implements OnInit {
	@Input() productDetail: ProductDetailResponseModel;
	@Input() qtyObject: QuantityModel;

	subsribers: Subscription[];
	constructor(public toastService: ToastService, private router: Router, private service: BaseService) {

	}

	ngOnInit(): void {
		this.subsribers = [];
	}

	ngOnDestroy() {
		this.toastService.removeAll();
		this.subsribers.forEach((each) => each.unsubscribe);
	}

	tambahkanKeKeranjang(dangerTpl) {
		this.showDanger(dangerTpl);
		console.log("product: ", this.productDetail);
		console.log("qty: ", this.qtyObject);
		var test = new CartItemModel()
		test.product_id = this.productDetail.id
		test.quantity = this.qtyObject.qty

		var cartreq = new CartItemRequestModel()
		cartreq.cart_list = []
		cartreq.cart_list.push(test)

		const sub = this.service
			.postData(AddCart, cartreq, CartItemResponseModel, false)
			.subscribe((resp) => {
				console.log("resp: ", resp)
			})


		//1. Call PostData from base service 
		//2. create cart model (request & response) in folder "models"
		//3. create class public convert(dto: any) 

		this.subsribers.push(sub);

		// add URL add-cart in file "app/app.constant.ts"

	}

	showDanger(dangerTpl) {
		this.toastService.removeAll();
		this.toastService.show(dangerTpl, {
			delay: 100,
			classname: 'kanan-atas',
		});
	}

	pergiKeKeranjang() {
		this.router.navigate(['./cart']);
	}

	countTotal() {
		return this.productDetail?.sell_price * this.qtyObject?.qty;
	}
}
