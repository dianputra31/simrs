// import { ProductCatalogResponseModel } from '../../../models/product-catalog-response-model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {
	ApprovalCount,
	CartListUrl,
	OpenTrxCount,

	ProfileUrl, SearchProduct
} from '../../../app.constant';
import { BaseService } from '../../../core/base-service/service/base.service';
import { PopUpRequestApprovalComponent } from '../../../shared/components/pop-up-request-approval/pop-up-request-approval.component';
import { RedirectParameterService } from '../../redirect-parameter.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	datacompany;
	datauser;
	account;
	dataproduk;
	optionsname;
	@Output() keyword = new EventEmitter<string>();

	subsribers: Subscription[];
	constructor(
		public dialog: MatDialog,
		private route: ActivatedRoute,
		private router: Router,
		private service: BaseService,
		private MatAutocompleteModule: MatAutocompleteModule,
		private _redirectparam: RedirectParameterService
	) // private ProductCatalogResponseModel: ProductCatalogResponseModel,
	{ }

	myControl = new FormControl();

	options: string[] = [];

	filteredOptions: Observable<string[]>;

	ngOnInit() {
		this.filteredOptions = this.myControl.valueChanges.pipe(
			startWith(''),
			//minimal 3 karakter
			map((value) => (value.length >= 3 ? this._filter(value) : []))
		);

		this.subsribers = [];

		const sub = this.service
			.getData(ProfileUrl, false, null, true)
			.subscribe((resp) => {
				this.datacompany = resp.data.company;
				this.datauser = resp.data.profile;
			});
		this.subsribers.push(sub);

		// this.datacompany = JSON.parse(localStorage.getItem('company'));
		// this.datauser = JSON.parse(localStorage.getItem('profile'));
		this.account = JSON.parse(localStorage.getItem('account'));

		this.numberitemInCart();
		this.numberOfApproval();
		this.numberOfOpenTrx();
	}

	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe);
	}

	goesToDetailProduct(a) {
		// const prod = event.option.value;
		// console.log(event);
		this._redirectparam.price_start = 0;
		this._redirectparam.price_end = 0;
		this._redirectparam.namaproduk = a.replaceAll('/', '-');
		this.router.navigate([
			'./pilih-produk/0/0' + '/' + this._redirectparam.namaproduk,
		]);
	}

	getKey(a) {
		this.keyword.emit(a);
		this._redirectparam.price_start = 0;
		this._redirectparam.price_end = 0;
		this._redirectparam.namaproduk = a.replaceAll('/', '-');
		if (this.router.url == '/pilih-produk/0/0') {
			this.router.navigate([
				'./pilih-produk/0/0' + '/' + this._redirectparam.namaproduk,
			]);
		} else {
			this.router.navigate([
				'./pilih-produk/0/0' + '/' + this._redirectparam.namaproduk,
			]);
		}
	}

	private _filter(value: string): string[] {
		const filterValue = value.toLowerCase();

		var params = {
			keyword: filterValue,
		};

		//get catalog list

		const sub = this.service
			.getData(
				SearchProduct + '?keyword=' + filterValue + '&limit=20',
				false,
				null,
				true
			)
			.subscribe((resp) => {
				this.dataproduk = resp;
				this.optionsname = this.dataproduk.data;
				this.options = [];
				for (let items of this.optionsname) {
					// console.log(items.product_name);
					this.options.push(items.product_name);
				}

				// console.log(this.options);
			});

		return this.options.filter(
			// (option) => option.toLowerCase().includes(filterValue)
			(option) => option.toLowerCase().indexOf(filterValue) === 0
		);

		// this.subsribers.push(sub);
	}

	showKategoriPopup() {
		console.log('hello');
	}

	openDialogLocation(des) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = 'auto';
		dialogConfig.width = '477px';
		dialogConfig.height = '155px';
		dialogConfig.panelClass = 'border-radius:20px';
		dialogConfig.data = {
			pageBefore: this.router.url,
			pageDestination: des,
			modePopUp: '0',
		};
		const modalDialog = this.dialog.open(
			PopUpRequestApprovalComponent,
			dialogConfig
		);
		return false;
	}

	backToHome() {
		if (this.router.url == '/request-approval') {
			this.openDialogLocation('./');
		} else {
			this.router.navigate(['./']);
		}
	}

	goToPage(a) {
		this.router.navigate([a]);
	}

	goToAccount() {
		this.router.navigate(['./account']);
	}

	goToCart() {
		if (this.router.url == '/request-approval') {
			this.openDialogLocation('./cart');
		} else {
			this.router.navigate(['./cart']);
		}
	}

	numberitemInCart() {
		const sub = this.service
			.getData(CartListUrl, false, null, true)
			.subscribe((resp) => {
				var tc = resp.data.cart_list.length;
				if (parseInt(tc) > 0) {
					document.getElementById('item-count').innerText =
						resp.data.cart_list.length;
				} else {
					document.getElementById('item-count').innerText = '';
					document
						.getElementById('item-count')
						.classList.remove('show');
				}
			});
		this.subsribers.push(sub);
	}

	numberOfApproval() {
		const sub = this.service
			.postData(ApprovalCount, false, false, false)
			.subscribe((resp) => {
				var tc = resp.data.approval_count;
				if (parseInt(tc) > 0) {
					document.getElementById('item-to-approve').innerText = tc;
				} else {
					document.getElementById('item-to-approve').innerText = '';
					document
						.getElementById('item-to-approve')
						.classList.remove('show');
				}
			});
		this.subsribers.push(sub);
	}

	numberOfOpenTrx() {
		const sub = this.service
			.postData(OpenTrxCount, false, false, false)
			.subscribe((resp) => {
				var tc = resp.data.open_transaction_count;
				console.log('tc: ', tc);
				if (parseInt(tc) > 0) {
					document.getElementById('open-trx').innerText = tc;
				} else {
					document.getElementById('open-trx').innerText = '';
					document
						.getElementById('open-trx')
						.classList.remove('show');
				}
			});
		this.subsribers.push(sub);
	}
}
