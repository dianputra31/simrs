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
  NewDokterLuarSave, SpesialisasiList, ViewDokterLuar
} from '../../../../../app/app.constant';
import { HttpService } from '../../../../../app/core/base-service/http.service';
import { BaseService } from '../../../../../app/core/base-service/service/base.service';



@Component({
  selector: 'edit-dokter-luar-dialog',
  templateUrl: './edit-dokter-luar-dialog.component.html',
  styleUrls: ['./edit-dokter-luar-dialog.component.scss']
})
export class EditDokterLuarDialogComponent implements OnInit {
  subscribers: Subscription[];
 

  spesialisasis: any[];
  editSpesialisasi = true;
  selectedSpesialisasi: any;

  selectedJenisKelamin: any;

  dokterluar;

	states: any[] = [
		{ jenis: 'L', label: 'Laki-Laki' },
		{ jenis: 'P', label: 'Perempuan' },
	];

	param = {
		KODEDOKTER: '',
    NAMADOKTER: '',
    ALAMAT: '',
		KDSPESIAL: '',
		TELP:'',
	};

  constructor(
    public dialogRef: MatDialogRef<EditDokterLuarDialogComponent>,
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
    this.viewDokter();
  }

  batal() {
		this.dialogRef.close();
	}


  viewDokter() {
		const sub = this.service
			.getData(ViewDokterLuar, false, false, false)
			.subscribe((resp) => {
				this.dokterluar = resp.data;
        this.param.NAMADOKTER = this.dokterluar.NAMADOKTER;
        this.param.KODEDOKTER = this.dokterluar.KODEDOKTER;
        this.param.ALAMAT = this.dokterluar.ALAMAT;
        this.param.KDSPESIAL = this.dokterluar.KDSPESIAL;
        this.param.TELP = this.dokterluar.TELP;
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



  onUserInput(input,namaparam){
    if(namaparam=='KODEDOKTER'){
      this.param.KODEDOKTER = input;
    }else if(namaparam=='NAMADOKTER'){
      this.param.NAMADOKTER = input;
    }else if(namaparam=='ALAMAT'){
      this.param.ALAMAT = input;
    }else if(namaparam=='TELP'){
      this.param.TELP = input;
    }
  }

  onUserInputSelected(input,namaparam){
    if(namaparam=='KDSPESIAL'){
      this.param.KDSPESIAL = input;
    }
  }

 

  valid() {
		var valid = true;


		if (!this.param.KODEDOKTER) {
			valid = false;
		} else if (!this.param.NAMADOKTER) {
			valid = false;
		} else if (!this.param.ALAMAT) {
			valid = false;
		} else if (!this.param.TELP) {
			valid = false;
		}  else if (!this.param.KDSPESIAL) {
			valid = false;
		}
		return valid;
	}


  submit() {
		const sub = this.http.post(NewDokterLuarSave, this.param).pipe(
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
