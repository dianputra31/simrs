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
import { BagianSave } from '../../../../../app/app.constant';
import { HttpService } from '../../../../../app/core/base-service/http.service';
import { BaseService } from '../../../../../app/core/base-service/service/base.service';



@Component({
  selector: 'edit-bagian-dialog',
  templateUrl: './edit-bagian-dialog.component.html',
  styleUrls: ['./edit-bagian-dialog.component.scss']
})
export class EditBagianDialogComponent implements OnInit {
  subscribers: Subscription[];
  bagian;
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

  private _jsonURL = 'assets/json/bagian_view.json';

  constructor(
    public dialogRef: MatDialogRef<EditBagianDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
		private route: ActivatedRoute,
		private router: Router,
		public dialog: MatDialog,
		private service: BaseService,
		private http: HttpClient,
		private http2: HttpService
  ) { }


  public getJSON(): Observable<any> {
		return this.http.get(this._jsonURL);
	  }

  ngOnInit(): void {
    this.subscribers = [];
		this.viewBagian();
  }

  batal() {
		this.dialogRef.close();
	}

  viewBagian() {
		const sub = 
    // this.service.getData(ViewBagian, false, false, false)
      this.getJSON().subscribe(
			(resp) => {
				this.bagian = resp.data;
        this.param.KODEBAGIAN	=	this.bagian.KODEBAGIAN	;
        this.param.GRPUNIT	=	this.bagian.GRPUNIT	;
        this.param.KMRBPJS	=	this.bagian.KMRBPJS	;
        this.param.KODEPMR	=	this.bagian.KODEPMR	;
        this.param.CCCODE	=	this.bagian.CCCODE	;
        this.param.DEPT	=	this.bagian.DEPT	;
        this.param.NAMABAGIAN	=	this.bagian.NAMABAGIAN	;
        this.param.STSINVENT	=	this.bagian.STSINVENT	;
        this.param.PJAWAB	=	this.bagian.PJAWAB	;
        this.param.FIXCOST	=	this.bagian.FIXCOST	;
        this.param.VARCOST	=	this.bagian.VARCOST	;
        this.param.TGLAKHIR	=	this.bagian.TGLAKHIR	;
        this.param.NOAKHIR	=	this.bagian.NOAKHIR	;
        this.param.FLAGBIAYAREGBAG	=	this.bagian.FLAGBIAYAREGBAG	;
        this.param.JMLDOKTER	=	this.bagian.JMLDOKTER	;
        this.param.NOSTOKOP	=	this.bagian.NOSTOKOP	;
        this.param.BULANSTOKOP	=	this.bagian.BULANSTOKOP	;
        this.param.BULANSTOKOPUM	=	this.bagian.BULANSTOKOPUM	;
        this.param.STATUSSTOKOP	=	this.bagian.STATUSSTOKOP	;
        this.param.KODEGUDANG	=	this.bagian.KODEGUDANG	;
        this.param.ANTRI	=	this.bagian.ANTRI	;
        this.param.FLAGNOMR	=	this.bagian.FLAGNOMR	;
        this.param.NOSTOKOPUM	=	this.bagian.NOSTOKOPUM	;
        this.param.STATUSSTOKOPUMUM	=	this.bagian.STATUSSTOKOPUMUM	;
        this.param.NOSTOKOPM	=	this.bagian.NOSTOKOPM	;
        this.param.BULANSTOKOPM	=	this.bagian.BULANSTOKOPM	;
        this.param.STATUSSTOKOPUMM	=	this.bagian.STATUSSTOKOPUMM	;
        this.param.STATUSSTOR	=	this.bagian.STATUSSTOR	;
        this.param.GUDANG	=	this.bagian.GUDANG	;
        this.param.INITCODE	=	this.bagian.INITCODE	;
        this.param.NOLABEL	=	this.bagian.NOLABEL	;
        this.param.REFUNIT	=	this.bagian.REFUNIT	;
        this.param.KODELOKASI	=	this.bagian.KODELOKASI	;
        this.param.JNSLYN	=	this.bagian.JNSLYN	;
        this.param.WKTTRF	=	this.bagian.WKTTRF	;
        this.param.CCCODE2	=	this.bagian.CCCODE2	;
        this.param.CUTOFF	=	this.bagian.CUTOFF	;
        this.param.TYPEBRG	=	this.bagian.TYPEBRG	;
        this.param.STSORDERLAB	=	this.bagian.STSORDERLAB	;
        this.param.PLYNPAS	=	this.bagian.PLYNPAS	;
        this.param.CUTOFF2	=	this.bagian.CUTOFF2	;
        this.param.AUTOADM	=	this.bagian.AUTOADM	;
        this.param.KDPOLIBPJS	=	this.bagian.KDPOLIBPJS	;
        this.param.JNSBAGIAN	=	this.bagian.JNSBAGIAN	;
        this.param.KDBAGINDUK	=	this.bagian.KDBAGINDUK	;
        this.param.KDINSTALASI	=	this.bagian.KDINSTALASI	;
        this.param.KODESMF	=	this.bagian.KODESMF	;


			});
    
		this.subscribers.push(sub);
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
		const sub = this.http.post(BagianSave, this.param).pipe(
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
