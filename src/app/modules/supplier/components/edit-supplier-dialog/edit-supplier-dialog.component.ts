import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NewKaryawanSave } from '../../../../../app/app.constant';
import { HttpService } from '../../../../../app/core/base-service/http.service';
import { BaseService } from '../../../../../app/core/base-service/service/base.service';


@Component({
  selector: 'edit-supplier-dialog',
  templateUrl: './edit-supplier-dialog.component.html',
  styleUrls: ['./edit-supplier-dialog.component.scss']
})
export class EditSupplierDialogComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  subscribers: Subscription[];
  supplier;

  private _jsonURL = 'assets/json/supplier_view.json';
 
  selectedJenisKelamin: any;

  public getJSON(): Observable<any> {
		return this.http.get(this._jsonURL);
	  }
 
	states: any[] = [
		{ jenis: 'L', label: 'Laki-Laki' },
		{ jenis: 'P', label: 'Perempuan' },
	];

  

	param = {
		KODESUPP:'', NAMASUPP:'', ALAMAT1:'', ALAMAT2:'', NOTELP:'', NOFAX:'', STSSUPP:'', APGRPID:'', TYPESUPP:'', ASAL:''
	};

  constructor(
    public dialogRef: MatDialogRef<EditSupplierDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
		private route: ActivatedRoute,
		private router: Router,
		public dialog: MatDialog,
		private service: BaseService,
		private http: HttpClient,
		private http2: HttpService
  ) { }

  ngOnInit(): void {
    this.subscribers = [];
		this.getSupplier();
  }

  batal() {
		this.dialogRef.close();
	}


  getSupplier() {
		this.blockUI.start();
		// const url = SupplierList;
		const sub = 
    // this.http.get(url).subscribe(
      this.getJSON().subscribe(
			(resp) => {
        // console.log(resp.data);
				this.blockUI.stop();
        this.supplier = resp.data;

        this.param.KODESUPP = this.supplier.KODESUPP;
        this.param.NAMASUPP = this.supplier.NAMASUPP;
        this.param.ALAMAT1 = this.supplier.ALAMAT1;
        this.param.ALAMAT2 = this.supplier.ALAMAT2;
        this.param.NOTELP = this.supplier.NOTELP;
        this.param.NOFAX = this.supplier.NOFAX;
        this.param.STSSUPP = this.supplier.STSSUPP;
        this.param.APGRPID = this.supplier.APGRPID;
        this.param.TYPESUPP = this.supplier.TYPESUPP;
			}
		);
		this.subscribers.push(sub);
	}

  

  onUserInput(input,namaparam){
    if(namaparam=='KODESUPP'){
      this.param.KODESUPP = input;
    }else if(namaparam=='NAMASUPP'){
      this.param.NAMASUPP = input;
    }else if(namaparam=='ALAMAT1'){
      this.param.ALAMAT1 = input;
    }else if(namaparam=='ALAMAT2'){
      this.param.ALAMAT2 = input;
    }else if(namaparam=='NOTELP'){
      this.param.NOTELP = input;
    }else if(namaparam=='NOFAX'){
      this.param.NOFAX = input;
    }else if(namaparam=='STSSUPP'){
      this.param.STSSUPP = input;
    }else if(namaparam=='APGRPID'){
      this.param.APGRPID = input;
    }else if(namaparam=='TYPESUPP'){
      this.param.TYPESUPP = input;
    }else if(namaparam=='ASAL'){
      this.param.ASAL = input;
    }
    
  }

  onUserInputSelected(input, namaparam){
    // if(namaparam=='KODEPT'){
    //   this.param.KODEPT = input;
    // }else if(namaparam=='JK'){
    //   this.param.JK = input;
    // }
    // this.selectedSpesialisasi = spesialisasi;
    // this.param.kodepmr = spesialisasi;
  }

  
  valid() {
		var valid = true;
    
    									
		if (!this.param.KODESUPP) {
			valid = false;
		} else if (!this.param.NAMASUPP) {
			valid = false;
		} else if (!this.param.ALAMAT1) {
			valid = false;
		} else if (!this.param.ALAMAT2) {
			valid = false;
		}  else if (!this.param.NOTELP) {
			valid = false;
		}else if (!this.param.NOFAX) {
			valid = false;
		}else if (!this.param.STSSUPP) {
			valid = false;
		}else if (!this.param.APGRPID) {
			valid = false;
		}else if (!this.param.TYPESUPP) {
			valid = false;
		}else if (!this.param.ASAL) {
			valid = false;
		}
		return valid;
	}


  submit() {
		const sub = this.http.post(NewKaryawanSave, this.param).pipe(
			map((resp: any): any => {
				return resp;
			}),
			catchError((err, caught: Observable<HttpEvent<any>>) => {
				if (err instanceof HttpErrorResponse && err.status == 401) {
					return of(err as any);
				}
				throw err;
			})

		);

		sub.subscribe((resp) => {
			this.dialogRef.close();
		});
	}
}
