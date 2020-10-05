import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceiptConfirmationComponent } from './../receipt-confirmation/receipt-confirmation.component';
// import { FilterInputComponent } from '../../../../shared/components/filter-input/filter-input.component'


@Component({
	selector: 'item-transaction',
	templateUrl: './item-transaction.component.html',
	styleUrls: ['./item-transaction.component.scss']
})
export class ItemTransactionComponent implements OnInit {
	@Input() param: any
	second;
	fourth;
	sixth;
	// items;
	// keyword;
	// filterservicesubscription;

	filternya;

	items = [
		{
			name: 'Purchaser A',
			code: '200803001',
			date: '18 Juli 2020',
			office: 'Kantor Pusat',
			price: '80,000,000',
			statustrx: 'Selesai',
			statusprocess: 'Selesai',
			item_name: 'Macbook Pro 2020 13" Inch 2.0 GHZ i5 10th Gen 512GB 1TB 16GB TouchBar - 512 GB, Space Grey',
			item_qty: '3',
			show: '1',
		},
		{
			name: 'Purchaser B',
			code: '200803003',
			date: '30 Juli 2020',
			office: 'Kantor Pusat',
			price: '30,000,000',
			statustrx: 'Ditolak',
			statusprocess: 'Ditolak',
			item_name: 'Macbook Pro 2019" Inch 2.0 GHZ i5 10th Gen 512GB 1TB 16GB TouchBar - 512 GB, Space Grey',
			item_qty: '1',
			show: '0',
		},
		{
			name: 'Purchaser A',
			code: '200803001',
			date: '31 Juli 2020',
			office: 'Kantor Pusat',
			price: '21,000,000',
			statustrx: 'Dibatalkan',
			statusprocess: 'Ditolak',
			item_name: 'Macbook Pro 2010" Inch 2.0 GHZ i5 10th Gen 512GB 1TB 16GB TouchBar - 512 GB, Space Grey',
			item_qty: '3',
			show: '0',
		},
		{
			name: 'Purchaser A',
			code: '200803001',
			date: '31 Juli 2020',
			office: 'Kantor Pusat',
			price: '21,000,000',
			statustrx: 'Diproses',
			statusprocess: 'Sampai',
			item_name: 'Macbook Pro 2010" Inch 2.0 GHZ i5 10th Gen 512GB 1TB 16GB TouchBar - 512 GB, Space Grey',
			item_qty: '3',
			show: '1',
		},
		{
			name: 'Purchaser A',
			code: '200803001',
			date: '31 Juli 2020',
			office: 'Kantor Pusat',
			price: '21,000,000',
			statustrx: 'Out of Stock',
			statusprocess: 'Ditolak',
			item_name: 'Macbook Pro 2010" Inch 2.0 GHZ i5 10th Gen 512GB 1TB 16GB TouchBar - 512 GB, Space Grey',
			item_qty: '3',
			show: '0',
		},
		{
			name: 'Purchaser A',
			code: '200803001',
			date: '31 Juli 2020',
			office: 'Kantor Pusat',
			price: '21,000,000',
			statustrx: 'Diproses',
			statusprocess: 'Diproses',
			item_name: 'Macbook Pro 2010" Inch 2.0 GHZ i5 10th Gen 512GB 1TB 16GB TouchBar - 512 GB, Space Grey',
			item_qty: '3',
			show: '1',
		}
	];

	// keywordSearch: FilterInputComponent = new FilterInputComponent()
	constructor(
		public dialog: MatDialog,
		private router: Router,
		private route: ActivatedRoute
		// private filterservice: FilterInputComponent,
	) { }

	ngOnInit(): void {
	}

	getTrxHist() {
		// console.log("thisval in item-transaction: ", keyword)
		// this.filterservicesubscription = this.filterservice
	}


	openDialogLocation(des) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.width = '475px';
		dialogConfig.height = '180px';
		dialogConfig.panelClass = 'border-radius:10px';
		dialogConfig.data = {
			pageBefore: this.router.url,
			pageDestination: des,
		};

		const modalDialog = this.dialog.open(
			ReceiptConfirmationComponent,
			dialogConfig
		);


		return false;
	}

	selesai() {
		this.openDialogLocation(['./transaction']);
	}

	carilagi() {
		this.router.navigate(['./pilih-produk']);
	}

	belilagi() {
		this.router.navigate(['./pilih-produk']);
	}

	ajukanlagi() {
		this.router.navigate(['./pilih-produk']);
	}

	carisejenis() {
		this.router.navigate(['./pilih-produk']);
	}

	viewDetail() {
		this.router.navigate(['./transaction-detail',]);
	}


}
