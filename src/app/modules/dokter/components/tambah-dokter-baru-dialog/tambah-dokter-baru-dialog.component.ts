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
  AddressMasterProvinceUrl, BankList, NewDokterSave, SpesialisasiList
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

  
  banks: any[];
  editBank = true;
  selectedBank: any;

	states: any[] = [
		{ jenis: 'L', label: 'Laki-Laki' },
		{ jenis: 'P', label: 'Perempuan' },
	];

	param = {
		namadokter: '',
    alm1dokter: '',
    alm2dokter: '',
		kdspecial: '',
		telpdokter: '',
    norekdr: '',
		village: '',
		province: '',
		district: '',
		district_type: '',
		subdistrict: '',
		zipcode: '',
    kodebagian: '',
    jnskelamin: '',
    kodepmr: '',
    kodebank: '',
    telppraktek:'',
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
		const sub = this.service
			.getData(SpesialisasiList, false, false, false)
			.subscribe((resp) => {
				this.spesialisasis = resp.data;
				this.spesialisasis.forEach((sps) => (sps.label = sps.NMSPESIAL));
			});
		this.subscribers.push(sub);
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
    if(namaparam=='namadokter'){
      this.param.namadokter = input;
    }else if(namaparam=='norekdr'){
      this.param.norekdr = input;
    }else if(namaparam=='alm1dokter'){
      this.param.alm1dokter = input;
    }else if(namaparam=='alm2dokter'){
      this.param.alm2dokter = input;
    }else if(namaparam=='telpdokter'){
      this.param.telpdokter = input;
    }else if(namaparam=='telppraktek'){
      this.param.telppraktek = input;
    }else if(namaparam=='norekdr'){
      this.param.norekdr = input;
    }
  }

  onUserInputSelected(input,namaparam){
    if(namaparam=='kodebank'){
      this.param.kodebank = input;
    }else if(namaparam=='jnskelamin'){
      this.param.jnskelamin = input;
    }else if(namaparam=='kodepmr'){
      this.param.kodepmr = input;
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

		if (!this.param.namadokter) {
			valid = false;
		} else if (!this.param.alm1dokter) {
			valid = false;
		} else if (!this.param.norekdr) {
			valid = false;
		} else if (!this.param.kodebank) {
			valid = false;
		}  else if (!this.param.telpdokter) {
			valid = false;
		}else if (!this.param.kodepmr) {
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
