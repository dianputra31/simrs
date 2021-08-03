import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  // AddressCreateUrl,
  // AddressMasterDistrictUrl,
  BankList, EditKaryawanSave, ViewKaryawan
} from '../../../../../app/app.constant';
import { HttpService } from '../../../../../app/core/base-service/http.service';
import { BaseService } from '../../../../../app/core/base-service/service/base.service';


@Component({
  selector: 'edit-karyawan-dialog',
  templateUrl: './edit-karyawan-dialog.component.html',
  styleUrls: ['./edit-karyawan-dialog.component.scss']
})
export class EditKaryawanDialogComponent implements OnInit {


  subscribers: Subscription[];
 
  karyawan;
  
  banks: any[];
  editBank = true;
  selectedBank: any;

	states: any[] = [
		{ jenis: 'L', label: 'Laki-Laki' },
		{ jenis: 'P', label: 'Perempuan' },
	];

	param = {
		NIKPGJWB:'',
    KODEPT:'',
    KDGRPTRF:'',
    NAMAKARY:'',
    DATAKELRG:'',
    STATUSKKRY:'',
    KDDEPT:'',
    KODEASS:'',
    JABATAN:'',
    JK:'',
    UNITKERJA:'',
    NOPASIEN:''
	};

  constructor(
    public dialogRef: MatDialogRef<EditKaryawanDialogComponent>,
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
    this.viewKaryawan();
		// this.getProvince();
  }

  batal() {
		this.dialogRef.close();
	}


  
  getBank() {
		const sub = this.service
			.getData(BankList, false, false, false)
			.subscribe((resp) => {
				this.banks = resp.data;
				this.banks.forEach((sps) => (sps.label = sps.NMBANK));
			});
		this.subscribers.push(sub);
	}

  viewKaryawan() {
		const sub = this.service
			.getData(ViewKaryawan, false, false, false)
			.subscribe((resp) => {
				this.karyawan = resp.data;
        this.param.NIKPGJWB = this.karyawan.NIKPGJWB;
        this.param.KODEPT = this.karyawan.KODEPT;
        this.param.KDGRPTRF = this.karyawan.KDGRPTRF;
        this.param.NAMAKARY = this.karyawan.NAMAKARY;
        this.param.DATAKELRG = this.karyawan.DATAKELRG;
        this.param.STATUSKKRY = this.karyawan.STATUSKKRY;
        this.param.KDDEPT = this.karyawan.KDDEPT;
        this.param.KODEASS = this.karyawan.KODEASS;
        this.param.JABATAN = this.karyawan.JABATAN;
        this.param.JK = this.karyawan.JK;
        this.param.UNITKERJA = this.karyawan.UNITKERJA;
        this.param.NOPASIEN = this.karyawan.NOPASIEN;
        
			});
    
		this.subscribers.push(sub);
	}

  
  onUserInput(input,namaparam){
    if(namaparam=='NIKPGJWB'){
      this.param.NIKPGJWB = input;
    }else if(namaparam=='KDGRPTRF'){
      this.param.KDGRPTRF = input;
    }else if(namaparam=='NAMAKARY'){
      this.param.NAMAKARY = input;
    }else if(namaparam=='DATAKELRG'){
      this.param.DATAKELRG = input;
    }else if(namaparam=='STATUSKKRY'){
      this.param.STATUSKKRY = input;
    }else if(namaparam=='KDDEPT'){
      this.param.KDDEPT = input;
    }else if(namaparam=='KODEASS'){
      this.param.KODEASS = input;
    }else if(namaparam=='JABATAN'){
      this.param.JABATAN = input;
    }else if(namaparam=='UNITKERJA'){
      this.param.UNITKERJA = input;
    }else if(namaparam=='NOPASIEN'){
      this.param.NOPASIEN = input;
    }
    
  }

  onUserInputSelected(input, namaparam){
    if(namaparam=='KODEPT'){
      this.param.KODEPT = input;
    }else if(namaparam=='JK'){
      this.param.JK = input;
    }
    // this.selectedSpesialisasi = spesialisasi;
    // this.param.kodepmr = spesialisasi;
  }

  
  valid() {
		var valid = true;
    

		if (!this.param.NIKPGJWB) {
			valid = false;
		} else if (!this.param.KDGRPTRF) {
			valid = false;
		} else if (!this.param.NAMAKARY) {
			valid = false;
		} else if (!this.param.DATAKELRG) {
			valid = false;
		}  else if (!this.param.STATUSKKRY) {
			valid = false;
		}else if (!this.param.KDDEPT) {
			valid = false;
		}else if (!this.param.KODEASS) {
			valid = false;
		}else if (!this.param.JABATAN) {
			valid = false;
		}else if (!this.param.UNITKERJA) {
			valid = false;
		}else if (!this.param.NOPASIEN) {
			valid = false;
		}else if (!this.param.KODEPT) {
			valid = false;
		}else if (!this.param.JK) {
			valid = false;
		}
		return valid;
	}


  submit() {
		const sub = this.http.post(EditKaryawanSave, this.param).pipe(
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
