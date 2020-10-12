import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Subscription } from 'rxjs';
import {
	ApprovalCount,
	ProductCatalogUrl,
	ProductTopSubcategoryUrl,
} from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { StorageService } from '../../../../core/storage/service/storage.service';
import { ProductCatalogRequestModel } from '../../../../models/product-catalog-request.model';
import { ProductCatalogResponseModel } from '../../../../models/product-catalog-response-model';
import { ProductTopSubcategoryResponseModel } from '../../../../models/product-top-subcategory-response.model';
import { DialogWaitingApprovalComponent } from '../../components/dialog-waiting-approval/dialog-waiting-approval.component';

@Component({
	selector: 'home-layout',
	templateUrl: './home-layout.component.html',
	styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent implements OnInit {
	subsribers: Subscription[];
	topCategories: ProductTopSubcategoryResponseModel[];
	productCatalogRows: ProductCatalogResponseModel[][];
	constructor(
		private service: BaseService,
		public dialog: MatDialog,
		private storageService: StorageService
	) {}

	ngOnInit() {
		this.subsribers = [];
		this.getProductTopSubcategory();
		this.productCatalogRows = [];

		if (this.storageService.getRole() == 'Manager') {
			this.numberOfApproval();
		}
	}

	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe);
	}

	getProductTopSubcategory() {
		const url = ProductTopSubcategoryUrl;
		const sub = this.service
			.getData(url, ProductTopSubcategoryResponseModel, null, true)
			.subscribe((resp) => {
				this.topCategories = resp;

				for (var i = 0; i < this.topCategories.length; ++i) {
					this.getCatalog(this.topCategories[i].id);
				}
			});

		this.subsribers.push(sub);
	}

	getCatalog(category_id: number) {
		const param = new ProductCatalogRequestModel();

		param.category_id = category_id;
		param.limit = 6;

		const url = ProductCatalogUrl + '?' + param.convertQueryParameter();
		const sub = this.service
			.getData(url, ProductCatalogResponseModel, null, true)
			.subscribe((resp) => {
				this.productCatalogRows.push(resp);
			});

		this.subsribers.push(sub);
	}

	openDialogManager(tc) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = 'auto';
		dialogConfig.width = '477px';
		dialogConfig.height = '155px';
		dialogConfig.panelClass = 'border-radius:20px';
		dialogConfig.data = {
			numberOfApproval: tc,
		};

		const modalDialog = this.dialog.open(
			DialogWaitingApprovalComponent,
			dialogConfig
		);

		return false;
	}

	numberOfApproval() {
		const sub = this.service
			.postData(ApprovalCount, false, false, false)
			.subscribe((resp) => {
				var tc = resp.data.approval_count;

				if (tc > 0) {
					this.openDialogManager(tc);
				}
			});
		this.subsribers.push(sub);
	}
}
