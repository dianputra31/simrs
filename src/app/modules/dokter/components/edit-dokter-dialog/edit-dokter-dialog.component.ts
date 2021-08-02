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
  AddressMasterProvinceUrl, BankList, NewDokterSave, SpesialisasiList, ViewDokter
} from '../../../../../app/app.constant';
import { HttpService } from '../../../../../app/core/base-service/http.service';
import { BaseService } from '../../../../../app/core/base-service/service/base.service';


@Component({
  selector: 'edit-dokter-dialog',
  templateUrl: './edit-dokter-dialog.component.html',
  styleUrls: ['./edit-dokter-dialog.component.scss']
})
export class EditDokterDialogComponent implements OnInit {

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

  dokter;
  
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
    telppraktek:''
	};

  constructor(
    public dialogRef: MatDialogRef<EditDokterDialogComponent>,
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
    this.viewDokter();
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

   
  viewDokter() {
		const sub = this.service
			.getData(ViewDokter, false, false, false)
			.subscribe((resp) => {
				this.dokter = resp.data;
        this.param.namadokter = this.dokter.NAMADOKTER;
        this.param.alm1dokter = this.dokter.ALM1DOKTER;
        this.param.norekdr = this.dokter.NOREKDR;
        this.param.telpdokter = this.dokter.TELPDOKTER;
        this.param.kodepmr = this.dokter.KODEPMR;
			});
    
		this.subscribers.push(sub);
	}

  onUserInputNamaDokter(input) {
		this.param.namadokter = input;
	}

  onUserInputRekeningDokter(input){
    this.param.norekdr = input;
  }

  onUserInputDetailDokter1(input) {
		this.param.alm1dokter = input;
	}

  onUserInputDetailDokter2(input) {
		this.param.alm2dokter = input;
	}

  onUserInputTelpRumah(input) {
		this.param.telpdokter = input;
	}

  onUserInputTelpPraktek(input) {
		this.param.telppraktek = input;
	}


  onSpesialisasiSelected(spesialisasi){
    this.selectedSpesialisasi = spesialisasi;
    this.param.kodepmr = spesialisasi;
  }

  onUserInputJenisKelamin(jeniskelamin){
    this.selectedJenisKelamin = jeniskelamin;
    this.param.jnskelamin = jeniskelamin;
  }

  onBankSelected(bank){
    this.selectedBank = bank;
    this.param.kodebank = bank;
  }

  valid() {
		var valid = true;

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
