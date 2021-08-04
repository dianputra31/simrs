import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Observable, Subscription } from 'rxjs';
import { KaryawanList, RESPONSE } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { EditKaryawanDialogComponent } from '../../components/edit-karyawan-dialog/edit-karyawan-dialog.component';
import { HapusKaryawanDialogComponent } from '../../components/hapus-karyawan-dialog/hapus-karyawan-dialog.component';
import { TambahKaryawanBaruDialogComponent } from '../../components/tambah-karyawan-baru-dialog/tambah-karyawan-baru-dialog.component';


@Component({
  selector: 'karyawan-layout',
  templateUrl: './karyawan-layout.component.html',
  styleUrls: ['./karyawan-layout.component.scss']
})
export class KaryawanLayoutComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
	subscribers: Subscription[];
  karyawans: any[];

  private _jsonURL = 'assets/json/karyawan.json';

  constructor(
    public dialog: MatDialog,
		private route: ActivatedRoute,
		private router: Router,
		private http: HttpService,
		private dialogService: BaseService
  ) { }

  public getJSON(): Observable<any> {
		return this.http.get(this._jsonURL);
	  }

  ngOnInit(): void {
    this.subscribers = [];
		this.getKaryawanList();
  }


  getKaryawanList() {
		this.blockUI.start();
		const url = KaryawanList;
		const sub = 
    // this.http.get(url).subscribe(
      this.getJSON().subscribe(
			(resp) => {
				this.blockUI.stop();
				if (resp.status.rc == RESPONSE.SUCCESS) {
					this.karyawans = resp.data;
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


  tambahKaryawan(){
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
			TambahKaryawanBaruDialogComponent,
			dialogConfig
		);

		modalDialog.afterClosed().subscribe((result) => {
			this.getKaryawanList();
		});
		return false;
  }

  editKaryawan(karyawan){
    const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = '600px';
		dialogConfig.width = '1034px'; 
		dialogConfig.panelClass = 'border-radius:20px';
		dialogConfig.data = {
			karyawan,
		};

		const modalDialog = this.dialog.open(
			EditKaryawanDialogComponent,
			dialogConfig
		);

		modalDialog.afterClosed().subscribe((result) => {
			this.getKaryawanList();
		});
		return false;
  }

  hapusKaryawan(karyawan){
    const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = '138px';
		dialogConfig.width = '477px';
		dialogConfig.panelClass = 'border-radius:10px';
		dialogConfig.data = {
			karyawan,
		};

		const modalDialog = this.dialog.open(
			HapusKaryawanDialogComponent,
			dialogConfig
		);

		modalDialog.afterClosed().subscribe((result) => {
			console.log(result);
			this.getKaryawanList();
		});
		return false;
  }

}
