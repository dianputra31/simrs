import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CatalogService } from '../../../app.constant';
import { BaseService } from '../../../core/base-service/service/base.service';
import { CatalogCategoryModel } from '../../../models/catalog-category.model';
import { CatalogRespModel } from '../../../models/catalog-response.model';
import { CatalogSubcategoryModel } from '../../../models/catalog-subcategory.model';
import { PopUpRequestApprovalComponent } from '../../../shared/components/pop-up-request-approval/pop-up-request-approval.component';

@Component({
	selector: 'header-category-button',
	templateUrl: './header-category-button.component.html',
	styleUrls: ['./header-category-button.component.scss'],
})
export class HeaderCategoryButtonComponent implements OnInit {
	categories = [];
	clickedCategory: CatalogCategoryModel;
	subsribers: Subscription[];

	subcategories = [
		'Kemeja',
		'Kaos',
		'Celana',
		'Celana Pendek',
		'Jas',
		'Topi',
		'Dasi',
		'Kacamata',
		'Jogger Pants',
	];

	constructor(
		private router: Router,
		private service: BaseService,
		public dialog: MatDialog,
		private route: ActivatedRoute
	) {}

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

	ngOnInit() {
		this.subsribers = [];
		this.getCatalog();
	}

	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe);
	}

	goesToSub(
		clickedCategory: CatalogCategoryModel,
		sub: CatalogSubcategoryModel
	) {
		if (this.router.url == '/request-approval') {
			this.openDialogLocation('/pilih-produk');
		} else {
			this.router.navigate([
				'/pilih-produk/' + clickedCategory.id + '/' + sub.id,
			]);
		}
	}

	getCatalog() {
		const url = CatalogService;

		const sub = this.service
			.getData(url, CatalogRespModel)
			.subscribe((resp) => {
				this.categories = resp.category;
				this.clickedCategory = this.categories[0];
			});

		this.subsribers.push(sub);
	}
}
