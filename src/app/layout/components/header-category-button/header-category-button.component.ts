import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CatalogService } from '../../../app.constant';
import { HttpService } from '../../../core/base-service/http.service';
import { BaseService } from '../../../core/base-service/service/base.service';
import { CatalogCategoryModel } from '../../../models/catalog-category.model';
import { PopUpRequestApprovalComponent } from '../../../shared/components/pop-up-request-approval/pop-up-request-approval.component';
import { RedirectParameterService } from '../../redirect-parameter.service';

@Component({
	selector: 'header-category-button',
	templateUrl: './header-category-button.component.html',
	styleUrls: ['./header-category-button.component.scss'],
})
export class HeaderCategoryButtonComponent implements OnInit {
	categories = [];
	clickedCategory: CatalogCategoryModel;
	subsribers: Subscription[];

	constructor(
		private router: Router,
		private service: HttpService,
		private baseService: BaseService,
		public dialog: MatDialog,
		private _redirectparam: RedirectParameterService
	) {}

	ngOnInit() {
		this.subsribers = [];
		this.getCatalog();
	}

	getCatalog() {
		const url = CatalogService;

		const sub = this.service.get(url).subscribe(
			(resp) => {
				this.categories = resp.data.category;
				this.categories = this.categories.concat(this.categories);
				this.clickedCategory = this.categories[0];
			},
			(error) => {
				if (error.status == 400) {
					this.baseService.showAlert(
						'Maaf tidak ada produk yang tersedia'
					);
				}
			}
		);

		this.subsribers.push(sub);
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

	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe);
	}

	goesToCat(clickedCategory: any) {
		this._redirectparam.namaproduk = '';
		this._redirectparam.price_start = 0;
		this._redirectparam.price_end = 0;
		if (this.router.url == '/request-approval') {
			this.openDialogLocation('/pilih-produk/0/0');
		} else {
			this.router.navigate([
				'/pilih-produk/' + clickedCategory.id + '/0',
			]);
		}
	}

	goesToSub(clickedCategory: any, sub: any) {
		this._redirectparam.namaproduk = '';
		this._redirectparam.price_start = 0;
		this._redirectparam.price_end = 0;
		if (this.router.url == '/request-approval') {
			this.openDialogLocation('/pilih-produk/0/0');
		} else {
			this.router.navigate([
				'/pilih-produk/' + clickedCategory.id + '/' + sub.id,
			]);
		}
	}

	resetSelectedCategory() {
		this.clickedCategory = this.categories[0];
	}
}
