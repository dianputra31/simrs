import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
	constructor(public toastService: ToastService, private router: Router) {}

	ngOnInit(): void {}

	ngOnDestroy() {
		this.toastService.removeAll();
	}

	tambahkanKeKeranjang(dangerTpl) {
		this.showDanger(dangerTpl);
	}

	showDanger(dangerTpl) {
		this.toastService.removeAll();
		this.toastService.show(dangerTpl, {
			delay: 5000,
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
