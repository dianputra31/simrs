import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../../../shared/toast/toast-service';

@Component({
	selector: 'price',
	templateUrl: './price.component.html',
	styleUrls: ['./price.component.scss'],
})
export class PriceComponent implements OnInit {
	qty = 0;
	constructor(public toastService: ToastService) {}

	ngOnInit(): void {}
}
