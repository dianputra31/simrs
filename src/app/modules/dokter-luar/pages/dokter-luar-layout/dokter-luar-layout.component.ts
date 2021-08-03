import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import { DokterLuarList, RESPONSE } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { EditDokterLuarDialogComponent } from '../../components/edit-dokter-luar-dialog/edit-dokter-luar-dialog.component';
import { HapusDokterLuarDialogComponent } from '../../components/hapus-dokter-luar-dialog/hapus-dokter-luar-dialog.component';
import { TambahDokterLuarBaruDialogComponent } from '../../components/tambah-dokter-luar-baru-dialog/tambah-dokter-luar-baru-dialog.component';

@Component({
  selector: 'dokter-luar-layout',
  templateUrl: './dokter-luar-layout.component.html',
  styleUrls: ['./dokter-luar-layout.component.scss']
})
export class DokterLuarLayoutComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
	subscribers: Subscription[];
  dokters: any[];

  constructor(
    public dialog: MatDialog,
		private route: ActivatedRoute,
		private router: Router,
		private http: HttpService,
		private dialogService: BaseService
  ) { }

  ngOnInit(): void {
    this.subscribers = [];
		this.getDokterList();
  }


  getDokterList() {
		this.blockUI.start();
		const url = DokterLuarList;
		const sub = this.http.get(url).subscribe(
			(resp) => {
				this.blockUI.stop();
				if (resp.status.rc == RESPONSE.SUCCESS) {
					this.dokters = resp.data;
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


  tambahDokter(){
    const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = '500px';
		dialogConfig.width = '1034px';
		dialogConfig.panelClass = 'border-radius:20px';
		dialogConfig.data = {
			pageBefore: this.router.url,
		};

		const modalDialog = this.dialog.open(
			TambahDokterLuarBaruDialogComponent,
			dialogConfig
		);

		modalDialog.afterClosed().subscribe((result) => {
			this.getDokterList();
		});
		return false;
  }

  editDokter(dokter){
    const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = '500px';
		dialogConfig.width = '1034px'; 
		dialogConfig.panelClass = 'border-radius:20px';
		dialogConfig.data = {
			dokter,
		};

		const modalDialog = this.dialog.open(
			EditDokterLuarDialogComponent,
			dialogConfig
		);

		modalDialog.afterClosed().subscribe((result) => {
			this.getDokterList();
		});
		return false;
  }

  hapusDokter(dokter){
    const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = '138px';
		dialogConfig.width = '477px';
		dialogConfig.panelClass = 'border-radius:10px';
		dialogConfig.data = {
			dokter,
		};

		const modalDialog = this.dialog.open(
			HapusDokterLuarDialogComponent,
			dialogConfig
		);

		modalDialog.afterClosed().subscribe((result) => {
			console.log(result);
			this.getDokterList();
		});
		return false;
  }

}
