import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import {
	ApprovalCount,
	ProductCatalogUrl,
	ProductTopSubcategoryUrl,
	RESPONSE,
} from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { StorageService } from '../../../../core/storage/service/storage.service';
import { DialogWaitingApprovalComponent } from '../../components/dialog-waiting-approval/dialog-waiting-approval.component';

@Component({
	selector: 'home-layout',
	templateUrl: './home-layout.component.html',
	styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent implements OnInit {
	subsribers: Subscription[];
	topCategories: any[];
	productCatalogRows: any[][] = [];
	@BlockUI() blockUI: NgBlockUI;

	constructor(
		public dialog: MatDialog,
		private storageService: StorageService,
		private dialogService: BaseService,
		private http: HttpService
	) {}

	ngOnInit() {
		this.subsribers = [];
		this.getProductTopSubcategory();

		if (this.storageService.getRole() == 'Manager') {
			this.numberOfApproval();
		}
	}

	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe);
	}

	getProductTopSubcategory() {
		this.blockUI.start();
		const sub = this.http.get(ProductTopSubcategoryUrl).subscribe(
			(resp) => {
				this.blockUI.stop();
				if (resp.status.rc == RESPONSE.SUCCESS) {
					this.topCategories = resp.data;

					for (var i = 0; i < this.topCategories.length; ++i) {
						this.getCatalog(this.topCategories[i].id);
					}
				} else {
					this.dialogService.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.blockUI.stop();
				this.http.handleError(error);
			}
		);

		this.subsribers.push(sub);
	}

	getCatalog(category_id: number) {
		const url = ProductCatalogUrl + '?/category_id=' + category_id;

		this.blockUI.start();
		const sub = this.http.get(url).subscribe(
			(resp) => {
				this.blockUI.stop();

				if (resp.status.rc === RESPONSE.SUCCESS) {
					this.productCatalogRows.push(resp.data.slice(0, 6));
				} else {
					this.dialogService.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.blockUI.stop();
				this.http.handleError(error);
			}
		);

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
	}

	numberOfApproval() {
		const sub = this.http.post(ApprovalCount, {}).subscribe(
			(resp) => {
				if (resp.status.rc === RESPONSE.SUCCESS) {
					if (resp.data.approval_count > 0) {
						this.openDialogManager(resp.data.approval_count);
					}
				} else {
					this.dialogService.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.blockUI.stop();
				this.http.handleError(error);
			}
		);

		this.subsribers.push(sub);
	}
}
