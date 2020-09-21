import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PopUpRequestApprovalComponent } from '../../../shared/components/pop-up-request-approval/pop-up-request-approval.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	datacompany;
	datauser;

	constructor(
		public dialog: MatDialog,
		private route: ActivatedRoute,
		private router: Router
	) {}

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

		this.datacompany = JSON.parse(localStorage.getItem('company'));
		this.datauser = JSON.parse(localStorage.getItem('profile'));
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

	goToCart() {
		if (this.router.url == '/request-approval') {
			this.openDialogLocation('./cart');
		} else {
			this.router.navigate(['./cart']);
		}
	}
}
