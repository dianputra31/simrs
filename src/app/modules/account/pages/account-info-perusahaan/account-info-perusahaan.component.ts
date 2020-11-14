import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import { AddressList, RESPONSE } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { EditAlamatDialogComponent } from '../../components-info-perusahaan/edit-alamat-dialog/edit-alamat-dialog.component';
import { TambahAlamatBaruDialogComponent } from '../../components-info-perusahaan/tambah-alamat-baru-dialog/tambah-alamat-baru-dialog.component';
import { TrashCanDialogComponent } from '../../components-info-perusahaan/trash-can-dialog/trash-can-dialog.component';

@Component({
	selector: 'account-info-perusahaan',
	templateUrl: './account-info-perusahaan.component.html',
	styleUrls: ['./account-info-perusahaan.component.scss'],
})
export class AccountInfoPerusahaanComponent implements OnInit {
	@BlockUI() blockUI: NgBlockUI;
	subscribers: Subscription[];
	addresses: any[];
	constructor(
		public dialog: MatDialog,
		private route: ActivatedRoute,
		private router: Router,
		private http: HttpService,
		private dialogService: BaseService
	) {}

	ngOnInit(): void {
		this.subscribers = [];
		this.getAddressList();
	}

	tambahAlamat() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = 'auto';
		dialogConfig.width = '1034px';
		dialogConfig.panelClass = 'border-radius:20px';
		dialogConfig.data = {
			pageBefore: this.router.url,
		};

		const modalDialog = this.dialog.open(
			TambahAlamatBaruDialogComponent,
			dialogConfig
		);

		modalDialog.afterClosed().subscribe((result) => {
			this.getAddressList();
		});
		return false;
	}

	getAddressList() {
		this.blockUI.start();
		const url = AddressList;
		const sub = this.http.get(url).subscribe(
			(resp) => {
				this.blockUI.stop();
				if (resp.status.rc == RESPONSE.SUCCESS) {
					this.addresses = resp.data;
				} else {
					this.dialogService.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.blockUI.stop();
				this.http.handleError(error);
			}
		);
		this.subscribers.push(sub);
	}

	editAddress(address) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = 'auto';
		dialogConfig.width = '1034px';
		dialogConfig.panelClass = 'border-radius:20px';
		dialogConfig.data = {
			address,
		};

		const modalDialog = this.dialog.open(
			EditAlamatDialogComponent,
			dialogConfig
		);

		modalDialog.afterClosed().subscribe((result) => {
			this.getAddressList();
		});
		return false;
	}
	deleteAddress(address) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = '138px';
		dialogConfig.width = '477px';
		dialogConfig.panelClass = 'border-radius:10px';
		dialogConfig.data = {
			address,
		};

		const modalDialog = this.dialog.open(
			TrashCanDialogComponent,
			dialogConfig
		);

		modalDialog.afterClosed().subscribe((result) => {
			console.log(result);
			this.getAddressList();
		});
		return false;
	}
	setUtamaAddress(address) {
		this.getAddressList();
	}
}
