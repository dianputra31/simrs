// import { ProductCatalogResponseModel } from '../../../models/product-catalog-response-model';
import {
	Component,
	EventEmitter,
	OnInit,
	Output,
	ViewChild
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {
	ApprovalCount,
	CartListUrl,
	OpenTrxCount, RESPONSE,
	SearchProduct
} from '../../../app.constant';
import { HttpService } from '../../../core/base-service/http.service';
import { BaseService } from '../../../core/base-service/service/base.service';
import { PopUpRequestApprovalComponent } from '../../../shared/components/pop-up-request-approval/pop-up-request-approval.component';
import { SharedService } from '../../../shared/services/shared.service';
import { RedirectParameterService } from '../../redirect-parameter.service';

@Component({
	selector: 'header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	datacompany;
	datauser;
	account;
	dataproduk;
	optionsname;
	menuTopLeftPosition = { x: '0', y: '0' };
	nApproval = 0;
	nTransaction = 0;
	nCart = 0;

	message = 'testing';

	@Output() keyword = new EventEmitter<string>();
	@ViewChild(MatMenuTrigger, { static: true }) matMenuTrigger: MatMenuTrigger;

	subsribers: Subscription[];
	constructor(
		public dialog: MatDialog,
		private route: ActivatedRoute,
		private router: Router,
		private http: HttpService,
		private dialogService: BaseService,
		private service: SharedService,
		private MatAutocompleteModule: MatAutocompleteModule,
		private _redirectparam: RedirectParameterService // private ProductCatalogResponseModel: ProductCatalogResponseModel,
	) {}

	myControl = new FormControl();

	options: string[] = [];
	// options: string[] = ['One', 'Two', 'Three'];

	filteredOptions: Observable<string[]>;
	private updateSubscription: Subscription;

	ngOnInit() {
		this.service.currentMessage.subscribe(
			(message) => (this.message = message)
		);

		this.filteredOptions = this.myControl.valueChanges.pipe(
			startWith(''),
			//minimal 3 karakter
			map((value) => (value.length > 2 ? this._filter(value) : []))
		);

		this.subsribers = [];

		// const sub = this.http.get(ProfileUrl).subscribe(
		// 	(resp) => {
		// 		if (resp.status.rc === RESPONSE.SUCCESS) {
		// 			this.datacompany = resp.data.company;
		// 			this.datauser = resp.data.profile;
		// 		} else {
		// 			this.dialogService.showAlert(resp.status.msg);
		// 		}
		// 	},
		// 	(error) => {
		// 		this.http.handleError(error);
		// 	}
		// );

		// this.subsribers.push(sub);

		// this.datacompany = JSON.parse(localStorage.getItem('company'));
		// this.datauser = JSON.parse(localStorage.getItem('profile'));
		this.account = JSON.parse(localStorage.getItem('account'));

		// this.numberitemInCart();
		// this.numberOfApproval();
		// this.numberOfOpenTrx();

		// this.getCurrentTrx();
	}

	getCurrentTrx() {
		setInterval(() => {
			this.nApproval = this._redirectparam.nApproval;
			this.nCart = this._redirectparam.nCart;
			this.nTransaction = this._redirectparam.nTransaction;
		}, 2500);
	}

	onRightClick(event: MouseEvent, item) {
		// preventDefault avoids to show the visualization of the right-click menu of the browser
		event.preventDefault();

		// we record the mouse position in our object
		this.menuTopLeftPosition.x = event.clientX + 'px';
		this.menuTopLeftPosition.y = event.clientY + 'px';

		// we open the menu
		// we pass to the menu the information about our object
		this.matMenuTrigger.menuData = { item: item };

		// we open the menu
		this.matMenuTrigger.openMenu();
	}

	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe);
	}

	goesToDetailProduct(a) {
		// const prod = event.option.value;
		// console.log(event);
		this._redirectparam.price_start = 0;
		this._redirectparam.price_end = 0;
		this._redirectparam.namaproduk = a.replaceAll('/', '@|@');
		this.router.navigate([
			'./pilih-produk/0/0' + '/' + this._redirectparam.namaproduk,
		]);
	}

	goesToPage(a){
		console.log(a);
		this.router.navigate(
			['./' + a ]
		);
	}

	getKey(a) {
		this.keyword.emit(a);
		this._redirectparam.price_start = 0;
		this._redirectparam.price_end = 0;
		this._redirectparam.namaproduk = a.replaceAll('/', '@|@');

		if (this.router.url == '/pilih-produk/0/0') {
			this.router.navigate([
				'./pilih-produk/0/0' + '/' + this._redirectparam.namaproduk,
			]);
		} else {
			if (this.router.url == '/request-approval') {
				this.openDialogLocation(
					'./pilih-produk/0/0' + '/' + this._redirectparam.namaproduk
				);
			} else {
				this.router.navigate([
					'./pilih-produk/0/0' + '/' + this._redirectparam.namaproduk,
				]);
			}
		}
	}

	public _filter(value: string): string[] {
		const filterValue = value.toLowerCase();
		// console.log(filterValue);
		const sub = this.http
			.get(
				SearchProduct +
					'?keyword=' +
					encodeURIComponent(filterValue) +
					'&limit=20'
			)
			.subscribe(
				(resp) => {
					if (resp.status.rc === RESPONSE.SUCCESS) {
						// console.log(resp.data);
						this.dataproduk = resp['data'];
						this.optionsname = this.dataproduk;
						// console.log("this.optionsname: " + this.dataproduk);
						// this.options = [];
						if (resp.query.found_rows > 0) {
							for (let items of this.optionsname) {
								this.options.push(items.product_name);
							}
						}

						// this.getKey(value);
					} else {
						this.dialogService.showAlert(resp.status.msg);
					}
				},
				(error) => {
					this.http.handleError(error);
				}
			);

		// console.log(this.options);

		return this.options.filter(
			// (option) => option.toLowerCase().includes(filterValue)
			(option) => option.toLowerCase().includes(filterValue)
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
		console.log(this.router.url);
		if (this.router.url === '/request-approval') {
			this.openDialogLocation('./');
		} else {
			this._redirectparam.namaproduk = '';
			this._redirectparam.price_start = 0;
			this._redirectparam.price_end = 0;
			this.router.navigate(['./home']);
		}
	}

	goToPage(a) {
		this.router.navigate([a]);
	}

	goToAccount() {
		if (this.router.url == '/request-approval') {
			this.openDialogLocation('./account');
		} else {
			this.router.navigate(['./account']);
		}
	}

	goToTransaction() {
		if (this.router.url == '/request-approval') {
			this.openDialogLocation('./transaction');
		} else {
			this.router.navigate(['./transaction']);
		}
	}

	goToApproval() {
		if (this.router.url == '/request-approval') {
			this.openDialogLocation('./approval');
		} else {
			this.router.navigate(['./approval']);
		}
	}

	goToCart() {
		if (this.router.url == '/request-approval') {
			this.openDialogLocation('./cart');
		} else {
			this.router.navigate(['./cart']);
		}
	}

	openNewTab(a) {
		if (this.router.url == '/request-approval') {
			this.openDialogLocation(a);
		} else {
			// this.router.navigate(['./cart']);
			// window.open('./#/account', "_blank");
			this.router.navigate([a]).then((result) => {
				window.open('/#/' + a, '_blank');
			});
		}
	}

	numberitemInCart() {
		const sub = this.http.get(CartListUrl).subscribe(
			(resp) => {
				if (resp.status.rc === RESPONSE.SUCCESS) {
					this.nCart = resp.data.cart_list.length;
					this._redirectparam.nCart = this.nCart;
				} else {
					this.dialogService.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.http.handleError(error);
			}
		);

		this.subsribers.push(sub);
	}

	numberOfApproval() {
		const sub = this.http.post(ApprovalCount, {}).subscribe(
			(resp) => {
				if (resp.status.rc === RESPONSE.SUCCESS) {
					this.nApproval = resp.data.approval_count;
					this._redirectparam.nApproval = this.nApproval;
				} else {
					this.dialogService.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.http.handleError(error);
			}
		);

		this.subsribers.push(sub);
	}

	numberOfOpenTrx() {
		const sub = this.http.post(OpenTrxCount, {}).subscribe(
			(resp) => {
				if (resp.status.rc === RESPONSE.SUCCESS) {
					this.nTransaction = resp.data.open_transaction_count;
					this._redirectparam.nTransaction = this.nTransaction;
				} else {
					this.dialogService.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.http.handleError(error);
			}
		);
		this.subsribers.push(sub);
	}

	onImgError(event) {
		event.target.src =
			'../../../../assets/image/icons/default-acc-white.svg';
	}

	triggerInit() {
		if (this.message == 'initiate') {
			this.ngOnInit();
		}
	}
}
