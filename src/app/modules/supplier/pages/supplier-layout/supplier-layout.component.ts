import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Observable, Subscription } from 'rxjs';
import { RESPONSE, SupplierList } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { EditSupplierDialogComponent } from '../../components/edit-supplier-dialog/edit-supplier-dialog.component';
import { HapusSupplierDialogComponent } from '../../components/hapus-supplier-dialog/hapus-supplier-dialog.component';
import { TambahSupplierBaruDialogComponent } from '../../components/tambah-supplier-baru-dialog/tambah-supplier-baru-dialog.component';


@Component({
  selector: 'supplier-layout',
  templateUrl: './supplier-layout.component.html',
  styleUrls: ['./supplier-layout.component.scss']
})
export class SupplierLayoutComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;
	subscribers: Subscription[];
  suppliers: any[];

  private _jsonURL = 'assets/json/supplier.json';

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
		this.getSupplierList();
  }


  getSupplierList() {
		this.blockUI.start();
		const url = SupplierList;
		const sub = 
    // this.http.get(url).subscribe(
      this.getJSON().subscribe(
			(resp) => {
        // console.log(resp.data);
				this.blockUI.stop();
				if (resp.status.rc == RESPONSE.SUCCESS) {
					this.suppliers = resp.data;
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


  tambahSupplier(){
    const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = '580px';
		dialogConfig.width = '1034px';
		dialogConfig.panelClass = 'border-radius:20px';
		dialogConfig.data = {
			pageBefore: this.router.url,
		};

		const modalDialog = this.dialog.open(
			TambahSupplierBaruDialogComponent,
			dialogConfig
		);

		modalDialog.afterClosed().subscribe((result) => {
			this.getSupplierList();
		});
		return false;
  }

  editSupplier(supplier){
    const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = '600px';
		dialogConfig.width = '1034px'; 
		dialogConfig.panelClass = 'border-radius:20px';
		dialogConfig.data = {
			supplier,
		};

		const modalDialog = this.dialog.open(
			EditSupplierDialogComponent,
			dialogConfig
		);

		modalDialog.afterClosed().subscribe((result) => {
			this.getSupplierList();
		});
		return false;
  }

  hapusSupplier(supplier){
    const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = '138px';
		dialogConfig.width = '477px';
		dialogConfig.panelClass = 'border-radius:10px';
		dialogConfig.data = {
			supplier,
		};

		const modalDialog = this.dialog.open(
			HapusSupplierDialogComponent,
			dialogConfig
		);

		modalDialog.afterClosed().subscribe((result) => {
			console.log(result);
			this.getSupplierList();
		});
		return false;
  }

}
