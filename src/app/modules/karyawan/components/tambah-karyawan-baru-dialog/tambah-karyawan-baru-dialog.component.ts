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
import { BankList, NewKaryawanSave } from '../../../../../app/app.constant';
import { HttpService } from '../../../../../app/core/base-service/http.service';
import { BaseService } from '../../../../../app/core/base-service/service/base.service';



@Component({
  selector: 'tambah-karyawan-baru-dialog',
  templateUrl: './tambah-karyawan-baru-dialog.component.html',
  styleUrls: ['./tambah-karyawan-baru-dialog.component.scss']
})
export class TambahKaryawanBaruDialogComponent implements OnInit {
  subscribers: Subscription[];
 
	provinces: any[];
	districts: any[];
	subdistricts: any[];
	villages: any[];
	zipcodes: any[];

	selectedProvince: any;
	selectedDistrict: any;
	selectedSubdistrict: any;
	selectedVillage: any;

	disableKabupaten = true;
	disableKecamatan = true;
	disableKelurahan = true;

	editProvinsi = true;
	editKabupaten = true;
	editKecamatan = true;
	editKelurahan = true;

  spesialisasis: any[];
  editSpesialisasi = true;
  selectedSpesialisasi: any;

  selectedJenisKelamin: any;

  
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
    public dialogRef: MatDialogRef<TambahKaryawanBaruDialogComponent>,
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
    this.getBank();
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
    console.log(this.param);
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
