import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Observable, Subscription } from 'rxjs';
import { BagianList, RESPONSE } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { EditBagianDialogComponent } from '../../components/edit-bagian-dialog/edit-bagian-dialog.component';
import { HapusBagianDialogComponent } from '../../components/hapus-bagian-dialog/hapus-bagian-dialog.component';
import { TambahBagianBaruDialogComponent } from '../../components/tambah-bagian-baru-dialog/tambah-bagian-baru-dialog.component';

@Component({
  selector: 'bagian-layout',
  templateUrl: './bagian-layout.component.html',
  styleUrls: ['./bagian-layout.component.scss']
})
export class BagianLayoutComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;
	subscribers: Subscription[];
  bagians: any[];

  private _jsonURL = 'assets/json/bagian.json';

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
		this.getBagianList();
  }


  getBagianList() {
		this.blockUI.start();
		const url = BagianList;
		const sub = 
    //this.http.get(url).subscribe(
      this.getJSON().subscribe(
			(resp) => {
				this.blockUI.stop();
				if (resp.status.rc == RESPONSE.SUCCESS) {
					this.bagians = resp.data;
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


  tambahBagian(){
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
			TambahBagianBaruDialogComponent,
			dialogConfig
		);

		modalDialog.afterClosed().subscribe((result) => {
			this.getBagianList();
		});
		return false;
  }

  editBagian(bagian){
    const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = '600px';
		dialogConfig.width = '1034px'; 
		dialogConfig.panelClass = 'border-radius:20px';
		dialogConfig.data = {
			bagian,
		};

		const modalDialog = this.dialog.open(
			EditBagianDialogComponent,
			dialogConfig
		);

		modalDialog.afterClosed().subscribe((result) => {
			this.getBagianList();
		});
		return false;
  }

  hapusBagian(bagian){
    const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = '138px';
		dialogConfig.width = '477px';
		dialogConfig.panelClass = 'border-radius:10px';
		dialogConfig.data = {
			bagian,
		};

		const modalDialog = this.dialog.open(
			HapusBagianDialogComponent,
			dialogConfig
		);

		modalDialog.afterClosed().subscribe((result) => {
			console.log(result);
			this.getBagianList();
		});
		return false;
  }

}

