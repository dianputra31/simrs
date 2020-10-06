import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ApprovalCount, CartListUrl } from '../../../app.constant';
import { BaseService } from '../../../core/base-service/service/base.service';
import { PopUpRequestApprovalComponent } from '../../../shared/components/pop-up-request-approval/pop-up-request-approval.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	datacompany;
	datauser;
	account;

	subsribers: Subscription[];
	constructor(
		public dialog: MatDialog,
		private route: ActivatedRoute,
		private router: Router,
		private service: BaseService
	) { }

	myControl = new FormControl();
	options: string[] = [
		'Ampelas Halus',
		'Ampelas Kasar',
		'Amplifier Jumbo',
		'Bawang Merah',
		'Bawang Putih',
		'Bolpoint',
		'Centong Super',
		'Sweater Merah Pria',
	];
	filteredOptions: Observable<string[]>;

	ngOnInit() {
		this.filteredOptions = this.myControl.valueChanges.pipe(
			startWith(''),
			//minimal 1 karakter
			map((value) => (value.length >= 1 ? this._filter(value) : []))
		);

		this.subsribers = [];
		this.datacompany = JSON.parse(localStorage.getItem('company'));
		this.datauser = JSON.parse(localStorage.getItem('profile'));
		this.account = JSON.parse(localStorage.getItem('account'));

		this.numberitemInCart()
		this.numberOfApproval()
	}

	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe);
	}

	private _filter(value: string): string[] {
		const filterValue = value.toLowerCase();
		return this.options.filter(
			(option) => option.toLowerCase().indexOf(filterValue) === 0
		);
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
		console.log("item in cart")
		const sub = this.service
			.getData(CartListUrl, false, null, true)
			.subscribe((resp) => {
				document.getElementById('item-count').innerText = resp.data.cart_list.length
			});
		this.subsribers.push(sub);
	}

	numberOfApproval() {
		console.log("number of approval")
		const sub = this.service
			.postData(ApprovalCount, false, false, false)
			.subscribe((resp) => {
				document.getElementById('item-to-approve').innerText = resp.data.approval_count

			});
		this.subsribers.push(sub);
	}
}
