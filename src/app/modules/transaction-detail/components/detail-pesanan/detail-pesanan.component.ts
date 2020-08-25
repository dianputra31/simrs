import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'detail-pesanan',
	templateUrl: './detail-pesanan.component.html',
	styleUrls: ['./detail-pesanan.component.scss']
})
export class DetailPesananComponent implements OnInit {
	statustrx;

	// items = [
	// 	{
	// 		name: 'Purchaser A',
	// 		code: '200803001',
	// 		date: '18 Juli 2020',
	// 		office: 'Kantor Pusat',
	// 		price: '80,000,000',
	// 		statustrx: 'Selesai',
	// 		statusprocess: 'Selesai',
	// 		item_name: 'Macbook Pro 2020 13" Inch 2.0 GHZ i5 10th Gen 512GB 1TB 16GB TouchBar - 512 GB, Space Grey',
	// 		item_qty: '3',
	// 		show: '1',
	// 		orderid: '1',
	// 	},
	// 	{
	// 		name: 'Purchaser B',
	// 		code: '200803003',
	// 		date: '30 Juli 2020',
	// 		office: 'Kantor Pusat',
	// 		price: '30,000,000',
	// 		statustrx: 'Ditolak',
	// 		statusprocess: 'Ditolak',
	// 		item_name: 'Macbook Pro 2019" Inch 2.0 GHZ i5 10th Gen 512GB 1TB 16GB TouchBar - 512 GB, Space Grey',
	// 		item_qty: '1',
	// 		show: '0',
	// 		orderid: '2',
	// 	},
	// 	{
	// 		name: 'Purchaser A',
	// 		code: '200803001',
	// 		date: '31 Juli 2020',
	// 		office: 'Kantor Pusat',
	// 		price: '21,000,000',
	// 		statustrx: 'Dibatalkan',
	// 		statusprocess: 'Ditolak',
	// 		item_name: 'Macbook Pro 2010" Inch 2.0 GHZ i5 10th Gen 512GB 1TB 16GB TouchBar - 512 GB, Space Grey',
	// 		item_qty: '3',
	// 		show: '0',
	// 		orderid: '3',
	// 	},
	// 	{
	// 		name: 'Purchaser A',
	// 		code: '200803001',
	// 		date: '31 Juli 2020',
	// 		office: 'Kantor Pusat',
	// 		price: '21,000,000',
	// 		statustrx: 'Diproses',
	// 		statusprocess: 'Sampai',
	// 		item_name: 'Macbook Pro 2010" Inch 2.0 GHZ i5 10th Gen 512GB 1TB 16GB TouchBar - 512 GB, Space Grey',
	// 		item_qty: '3',
	// 		show: '1',
	// 		orderid: '4',
	// 	},
	// 	{
	// 		name: 'Purchaser A',
	// 		code: '200803001',
	// 		date: '31 Juli 2020',
	// 		office: 'Kantor Pusat',
	// 		price: '21,000,000',
	// 		statustrx: 'Out of Stock',
	// 		statusprocess: 'Ditolak',
	// 		item_name: 'Macbook Pro 2010" Inch 2.0 GHZ i5 10th Gen 512GB 1TB 16GB TouchBar - 512 GB, Space Grey',
	// 		item_qty: '3',
	// 		show: '0',
	// 		orderid: '5',
	// 	},
	// 	{
	// 		name: 'Purchaser A',
	// 		code: '200803001',
	// 		date: '31 Juli 2020',
	// 		office: 'Kantor Pusat',
	// 		price: '21,000,000',
	// 		statustrx: 'Diproses',
	// 		statusprocess: 'Diproses',
	// 		item_name: 'Macbook Pro 2010" Inch 2.0 GHZ i5 10th Gen 512GB 1TB 16GB TouchBar - 512 GB, Space Grey',
	// 		item_qty: '3',
	// 		show: '1',
	// 		orderid: '6',
	// 	}
	// ];

	constructor(
		private router: Router,
		private route: ActivatedRoute,
	) { }

	ngOnInit(): void {
		this.statustrx = "Selesai";
	}


	belilagi() {
		this.router.navigate(['./pilih-produk']);
	}

	selesai() {
		// this.openDialogLocation(['./transaction']);
		this.router.navigate(['./pilih-produk']);
	}

	carilagi() {
		this.router.navigate(['./pilih-produk']);
	}


	ajukanlagi() {
		this.router.navigate(['./pilih-produk']);
	}

	carisejenis() {
		this.router.navigate(['./pilih-produk']);
	}

}
