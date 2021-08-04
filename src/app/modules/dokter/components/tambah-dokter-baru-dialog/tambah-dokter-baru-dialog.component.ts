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
  AddressMasterProvinceUrl, NewDokterSave
} from '../../../../../app/app.constant';
import { HttpService } from '../../../../../app/core/base-service/http.service';
import { BaseService } from '../../../../../app/core/base-service/service/base.service';



@Component({
  selector: 'tambah-dokter-baru-dialog',
  templateUrl: './tambah-dokter-baru-dialog.component.html',
  styleUrls: ['./tambah-dokter-baru-dialog.component.scss']
})
export class TambahDokterBaruDialogComponent implements OnInit {
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

  private _jsonURLspesialisasi = 'assets/json/spesialisasi.json';
  private _jsonURLbank = 'assets/json/bank.json';
  

  banks: any[];
  editBank = true;
  selectedBank: any;

	states: any[] = [
		{ jenis: 'L', label: 'Laki-Laki' },
		{ jenis: 'P', label: 'Perempuan' },
	];

	param = {
		KODEDOKTER: '',KDSPESIAL: '',KODEBAGIAN: '',NAMADOKTER: '',JNSKELAMIN: '',ALM1DOKTER: '',ALM2DOKTER: '',TELPDOKTER: '',TELPRAKTEK: '',NOPAGERDR: '',JSDRPASDR: '',JSDRPASRS: '',JSDRPASVT: '',POTPAJAK: '',STSKERJADR: '',PASDRHJ: '',PASRSHJ: '',NOREKDR: '',KETDOKTER: '',FLAGHADIR: '',MAXPASIEN: '',MAXKONTRAK: '',KODEPMR: '',USLOGNM: '',LAMAPLY: '',JENISDR: '',HADIR: '',NMGELARDPN: '',NMGELARBLK: '',JSDRPASPT: '',JSDRPASUMUM: '',PASPTHJ: '',PASUMHJ: '',TTDIMG:'',
    kodebank:''
	};

  constructor(
    public dialogRef: MatDialogRef<TambahDokterBaruDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
		private route: ActivatedRoute,
		private router: Router,
		public dialog: MatDialog,
		private service: BaseService,
		private http: HttpClient,
		private http2: HttpService
  ) { }


  public getJSONSpesialisasi(): Observable<any> {
		return this.http.get(this._jsonURLspesialisasi);
	  }


    public getJSONBank(): Observable<any> {
      return this.http.get(this._jsonURLbank);
      }

  ngOnInit(): void {
    this.subscribers = [];
    this.getSpesialisasi();
    this.getBank();
		// this.getProvince();
  }

  batal() {
		this.dialogRef.close();
	}


  getProvince() {
		const sub = this.service
			.postData(AddressMasterProvinceUrl, false, false, false)
			.subscribe((resp) => {
				this.provinces = resp.data;
				this.provinces.forEach((prov) => (prov.label = prov.province));
			});
		this.subscribers.push(sub);
	}


  

  getSpesialisasi() {
		const sub = 
    // this.service.getData(SpesialisasiList, false, false, false)
    this.getJSONSpesialisasi()
			.subscribe((resp) => {
				this.spesialisasis = resp.data;
				this.spesialisasis.forEach((sps) => (sps.label = sps.NMSPESIAL));
			});
		this.subscribers.push(sub);
	}


  
  getBank() {
		const sub = 
    // this.service.getData(BankList, false, false, false)
    this.getJSONBank()
			.subscribe((resp) => {
				this.banks = resp.data;
				this.banks.forEach((sps) => (sps.label = sps.NMBANK));
			});
		this.subscribers.push(sub);
	}


  onUserInput(input,namaparam){
    if(namaparam=='KODEDOKTER'){this.param.KODEDOKTER=input;}
    else if(namaparam=='KDSPESIAL'){this.param.KDSPESIAL=input;}
    else if(namaparam=='KODEBAGIAN'){this.param.KODEBAGIAN=input;}
    else if(namaparam=='NAMADOKTER'){this.param.NAMADOKTER=input;}
    // else if(namaparam=='JNSKELAMIN'){this.param.JNSKELAMIN=input;}
    else if(namaparam=='ALM1DOKTER'){this.param.ALM1DOKTER=input;}
    else if(namaparam=='ALM2DOKTER'){this.param.ALM2DOKTER=input;}
    else if(namaparam=='TELPDOKTER'){this.param.TELPDOKTER=input;}
    else if(namaparam=='TELPRAKTEK'){this.param.TELPRAKTEK=input;}
    else if(namaparam=='NOPAGERDR'){this.param.NOPAGERDR=input;}
    else if(namaparam=='JSDRPASDR'){this.param.JSDRPASDR=input;}
    else if(namaparam=='JSDRPASRS'){this.param.JSDRPASRS=input;}
    else if(namaparam=='JSDRPASVT'){this.param.JSDRPASVT=input;}
    else if(namaparam=='POTPAJAK'){this.param.POTPAJAK=input;}
    else if(namaparam=='STSKERJADR'){this.param.STSKERJADR=input;}
    else if(namaparam=='PASDRHJ'){this.param.PASDRHJ=input;}
    else if(namaparam=='PASRSHJ'){this.param.PASRSHJ=input;}
    else if(namaparam=='NOREKDR'){this.param.NOREKDR=input;}
    else if(namaparam=='KETDOKTER'){this.param.KETDOKTER=input;}
    else if(namaparam=='FLAGHADIR'){this.param.FLAGHADIR=input;}
    else if(namaparam=='MAXPASIEN'){this.param.MAXPASIEN=input;}
    else if(namaparam=='MAXKONTRAK'){this.param.MAXKONTRAK=input;}
    // else if(namaparam=='KODEPMR'){this.param.KODEPMR=input;}
    else if(namaparam=='USLOGNM'){this.param.USLOGNM=input;}
    else if(namaparam=='LAMAPLY'){this.param.LAMAPLY=input;}
    else if(namaparam=='JENISDR'){this.param.JENISDR=input;}
    else if(namaparam=='HADIR'){this.param.HADIR=input;}
    else if(namaparam=='NMGELARDPN'){this.param.NMGELARDPN=input;}
    else if(namaparam=='NMGELARBLK'){this.param.NMGELARBLK=input;}
    else if(namaparam=='JSDRPASPT'){this.param.JSDRPASPT=input;}
    else if(namaparam=='JSDRPASUMUM'){this.param.JSDRPASUMUM=input;}
    else if(namaparam=='PASPTHJ'){this.param.PASPTHJ=input;}
    else if(namaparam=='PASUMHJ'){this.param.PASUMHJ=input;}
    else if(namaparam=='TTDIMG'){this.param.TTDIMG=input;}

  }

  onUserInputSelected(input,namaparam){
    if(namaparam=='kodebank'){
      this.param.kodebank = input;
    }else if(namaparam=='JNSKELAMIN'){
      this.param.JNSKELAMIN = input;
    }else if(namaparam=='KODEPMR'){
      this.param.KODEPMR = input;
    }
  }

 

  valid() {
		var valid = true;
    /*
    // else if (!this.param.province) {
		// 	valid = false;
		// } else if (!this.param.district) {
		// 	valid = false;
		// } else if (!this.param.subdistrict) {
		// 	valid = false;
		// } else if (!this.param.village) {
		// 	valid = false;
		// } else if (!this.param.zipcode) {
		// 	valid = false;
		// } 
     */

		if (!this.param.NAMADOKTER) {
			valid = false;
		} else if (!this.param.ALM1DOKTER) {
			valid = false;
		} else if (!this.param.NOREKDR) {
			valid = false;
		} else if (!this.param.kodebank) {
			valid = false;
		}  else if (!this.param.TELPDOKTER) {
			valid = false;
		}else if (!this.param.KODEPMR) {
			valid = false;
		}
		return valid;
	}


  submit() {
		const sub = this.http.post(NewDokterSave, this.param).pipe(
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
