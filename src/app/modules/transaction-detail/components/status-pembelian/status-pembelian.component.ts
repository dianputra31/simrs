import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'status-pembelian',
	templateUrl: './status-pembelian.component.html',
	styleUrls: ['./status-pembelian.component.scss'],
})
export class StatusPembelianComponent implements OnInit {
	@Input() item: any;
	constructor(private router: Router) {}

	ngOnInit(): void {
		console.log(this.item);
	}

	lihatTagihanDetail() {
		this.router.navigate([]).then((result) => {
			window.open(
				window.location.origin +
					'/#/tagihan-print/' +
					this.item.invoice_no,
				'_blank'
			);
		});
		// console.log(tagihan);
	}
}
