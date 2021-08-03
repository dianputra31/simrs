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
import { NewBagianSave } from '../../../../../app/app.constant';
import { HttpService } from '../../../../../app/core/base-service/http.service';
import { BaseService } from '../../../../../app/core/base-service/service/base.service';



@Component({
  selector: 'tambah-bagian-baru-dialog',
  templateUrl: './tambah-bagian-baru-dialog.component.html',
  styleUrls: ['./tambah-bagian-baru-dialog.component.scss']
})
export class TambahBagianBaruDialogComponent implements OnInit {
  subscribers: Subscription[];
 
  selectedJenisKelamin: any;

 
	states: any[] = [
		{ jenis: '1', label: 'PILIHAN 1' },
		{ jenis: '2', label: 'PILIHAN 2' },
    { jenis: '3', label: 'PILIHAN 3' },
    { jenis: '4', label: 'PILIHAN 4' },
    { jenis: '5', label: 'PILIHAN 5' },
	];

	param = {
		KODEBAGIAN:'',GRPUNIT:'',KMRBPJS:'',KODEPMR:'',CCCODE:'',DEPT:'',NAMABAGIAN:'',
    STSINVENT:'',PJAWAB:'',FIXCOST:'',VARCOST:'',TGLAKHIR:'',NOAKHIR:'',FLAGBIAYAREGBAG:'',
    JMLDOKTER:'',NOSTOKOP:'',BULANSTOKOP:'',BULANSTOKOPUM:'',STATUSSTOKOP:'',KODEGUDANG:'',
    ANTRI:'',FLAGNOMR:'',NOSTOKOPUM:'',STATUSSTOKOPUMUM:'',NOSTOKOPM:'',BULANSTOKOPM:'',
    STATUSSTOKOPUMM:'',STATUSSTOR:'',GUDANG:'',INITCODE:'',NOLABEL:'',REFUNIT:'',KODELOKASI:'',
    JNSLYN:'',WKTTRF:'',CCCODE2:'',CUTOFF:'',TYPEBRG:'',STSORDERLAB:'',PLYNPAS:'',CUTOFF2:'',
    AUTOADM:'',KDPOLIBPJS:'',JNSBAGIAN:'',KDBAGINDUK:'',KDINSTALASI:'',KODESMF:''
	};

  constructor(
    public dialogRef: MatDialogRef<TambahBagianBaruDialogComponent>,
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
		// this.getProvince();
  }

  batal() {
		this.dialogRef.close();
	}


  									
  					
  onUserInput(input,namaparam){
    if(namaparam=='KODEBAGIAN'){
      this.param.KODEBAGIAN = input;
    }else if(namaparam=='GRPUNIT'){
      this.param.GRPUNIT = input;
    }else if(namaparam=='KMRBPJS'){
      this.param.KMRBPJS = input;
    }else if(namaparam=='KODEPMR'){
      this.param.KODEPMR = input;
    }else if(namaparam=='CCCODE'){
      this.param.CCCODE = input;
    }else if(namaparam=='KDDEPT'){
      this.param.DEPT = input;
    }else if(namaparam=='DEPT'){
      this.param.NAMABAGIAN = input;
    }else if(namaparam=='STSINVENT'){
      this.param.STSINVENT = input;
    }else if(namaparam=='PJAWAB'){
      this.param.PJAWAB = input;
    }else if(namaparam=='FIXCOST'){
      this.param.FIXCOST = input;
    }else if(namaparam=='VARCOST'){
      this.param.VARCOST = input;
    }else if(namaparam=='NOAKHIR'){
      this.param.NOAKHIR = input;
    }else if(namaparam=='FLAGBIAYAREGBAG'){
      this.param.FLAGBIAYAREGBAG = input;
    }else if(namaparam=='JMLDOKTER'){
      this.param.JMLDOKTER = input;
    }else if(namaparam=='NOSTOKOP'){
      this.param.NOSTOKOP = input;
    }else if(namaparam=='BULANSTOKOP'){
      this.param.BULANSTOKOP = input;
    }else if(namaparam=='BULANSTOKOPUM'){
      this.param.BULANSTOKOPUM = input;
    }else if(namaparam=='STATUSSTOKOP'){
      this.param.STATUSSTOKOP = input;
    }else if(namaparam=='KODEGUDANG'){
      this.param.KODEGUDANG = input;
    }else if(namaparam=='FLAGNOMR'){
      this.param.FLAGNOMR = input;
    }else if(namaparam=='NOSTOKOPUM'){
      this.param.NOSTOKOPUM = input;
    }else if(namaparam=='STATUSSTOKOPUMUM'){
      this.param.STATUSSTOKOPUMUM = input;
    }else if(namaparam=='NOSTOKOPM'){
      this.param.NOSTOKOPM = input;
    }else if(namaparam=='BULANSTOKOPM'){
      this.param.BULANSTOKOPM = input;
    }else if(namaparam=='STATUSSTOKOPUMM'){
      this.param.STATUSSTOKOPUMM = input;
    }else if(namaparam=='STATUSSTOR'){
      this.param.STATUSSTOR = input;
    }else if(namaparam=='GUDANG'){
      this.param.GUDANG = input;
    }else if(namaparam=='INITCODE'){
      this.param.INITCODE = input;
    }else if(namaparam=='NOLABEL'){
      this.param.NOLABEL = input;
    }else if(namaparam=='REFUNIT'){
      this.param.REFUNIT = input;
    }else if(namaparam=='KODELOKASI'){
      this.param.KODELOKASI = input;
    }else if(namaparam=='JNSLYN'){
      this.param.JNSLYN = input;
    }else if(namaparam=='WKTTRF'){
      this.param.WKTTRF = input;
    }else if(namaparam=='CCCODE2'){
      this.param.CCCODE2 = input;
    }else if(namaparam=='CUTOFF'){
      this.param.CUTOFF = input;
    }else if(namaparam=='TYPEBRG'){
      this.param.TYPEBRG = input;
    }else if(namaparam=='STSORDERLAB'){
      this.param.STSORDERLAB = input;
    }else if(namaparam=='PLYNPAS'){
      this.param.PLYNPAS = input;
    }else if(namaparam=='CUTOFF2'){
      this.param.CUTOFF2 = input;
    }else if(namaparam=='AUTOADM'){
      this.param.AUTOADM = input;
    }else if(namaparam=='KDPOLIBPJS'){
      this.param.KDPOLIBPJS = input;
    }else if(namaparam=='JNSBAGIAN'){
      this.param.JNSBAGIAN = input;
    }else if(namaparam=='KDBAGINDUK'){
      this.param.KDBAGINDUK = input;
    }else if(namaparam=='KDINSTALASI'){
      this.param.KDINSTALASI = input;
    }else if(namaparam=='KODESMF'){
      this.param.KODESMF = input;
    }
    
  }

  onUserInputSelected(input, namaparam){
    if(namaparam=='KDBAGINDUK'){
      this.param.KDBAGINDUK = input;
    }else if(namaparam=='KDINSTALASI'){
      this.param.KDINSTALASI = input;
    }
    // this.selectedSpesialisasi = spesialisasi;
    // this.param.kodepmr = spesialisasi;
  }

  
  valid() {
		var valid = true;
    

		if (!this.param.KODEBAGIAN) {
			valid = false;
		} else if (!this.param.GRPUNIT) {
			valid = false;
		} else if (!this.param.KMRBPJS) {
			valid = false;
		} else if (!this.param.KODEPMR) {
			valid = false;
		}  else if (!this.param.CCCODE) {
			valid = false;
		}else if (!this.param.DEPT) {
			valid = false;
		}else if (!this.param.NAMABAGIAN) {
			valid = false;
		}else if (!this.param.STSINVENT) {
			valid = false;
		}else if (!this.param.PJAWAB) {
			valid = false;
		}else if (!this.param.FIXCOST) {
			valid = false;
		}else if (!this.param.VARCOST) {
			valid = false;
		}else if (!this.param.TGLAKHIR) {
			valid = false;
		}
		return valid;
	}


  submit() {
		const sub = this.http.post(NewBagianSave, this.param).pipe(
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
