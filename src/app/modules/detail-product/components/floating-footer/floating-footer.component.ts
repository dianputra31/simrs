import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { ProductDetailResponseModel } from '../../models/product-detail-response.model';

@Component({
	selector: 'floating-footer',
	templateUrl: './floating-footer.component.html',
	styleUrls: ['./floating-footer.component.scss'],
})
export class FloatingFooterComponent implements OnInit {
	@Input() productDetail: ProductDetailResponseModel;
	@Input() quantity: any;
	@Output() tambahkanKeKerangjangEvent = new EventEmitter();

	subsribers: Subscription[];
	constructor(
		private router: Router,
		private service: BaseService,
		private http: HttpService
	) {}

	ngOnInit(): void {
		this.subsribers = [];
	}

	tambahkanKeKeranjang() {
		this.tambahkanKeKerangjangEvent.emit();

		var test = {
			product_id: this.productDetail.id,
			quantity: this.quantity,
		};

		var cartreq = {
			cart_list: [test],
		};
	}

	onImgError(event) {
		event.target.src = '../../../../assets/image/icons/default-item.png';
	}
}
