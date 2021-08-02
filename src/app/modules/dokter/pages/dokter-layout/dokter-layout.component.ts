import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import { DokterList, RESPONSE } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { EditDokterDialogComponent } from '../../components/edit-dokter-dialog/edit-dokter-dialog.component';
import { HapusDokterDialogComponent } from '../../components/hapus-dokter-dialog/hapus-dokter-dialog.component';
import { TambahDokterBaruDialogComponent } from '../../components/tambah-dokter-baru-dialog/tambah-dokter-baru-dialog.component';

@Component({
  selector: 'dokter-layout',
  templateUrl: './dokter-layout.component.html',
  styleUrls: ['./dokter-layout.component.scss']
})
export class DokterLayoutComponent implements OnInit {
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
		const url = DokterList;
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
		dialogConfig.height = '600px';
		dialogConfig.width = '1034px';
		dialogConfig.panelClass = 'border-radius:20px';
		dialogConfig.data = {
			pageBefore: this.router.url,
		};

		const modalDialog = this.dialog.open(
			TambahDokterBaruDialogComponent,
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
		dialogConfig.height = '600px';
		dialogConfig.width = '1034px'; 
		dialogConfig.panelClass = 'border-radius:20px';
		dialogConfig.data = {
			dokter,
		};

		const modalDialog = this.dialog.open(
			EditDokterDialogComponent,
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
			HapusDokterDialogComponent,
			dialogConfig
		);

		modalDialog.afterClosed().subscribe((result) => {
			console.log(result);
			this.getDokterList();
		});
		return false;
  }

}
