import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
	AddressCreateUrl,
	AddressMasterDistrictUrl,
	AddressMasterProvinceUrl,
	AddressMasterSubDistrictUrl,
	AddressMasterVillageUrl,
	titleCase,
} from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';

@Component({
	selector: 'tambah-alamat-baru-dialog',
	templateUrl: './tambah-alamat-baru-dialog.component.html',
	styleUrls: ['./tambah-alamat-baru-dialog.component.scss'],
})
export class TambahAlamatBaruDialogComponent implements OnInit {
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

	states: any[] = [
		{ jenis: 'PT', label: 'PT' },
		{ jenis: 'CV', label: 'CV' },
		{ jenis: 'Firma', label: 'Firma' },
	];

	param = {
		address_name: '',
		recipient_name: '',
		recipient_contact: '',
		village: '',
		province: '',
		district: '',
		district_type: '',
		subdistrict: '',
		zipcode: '',
		address_detail: '',
		is_head_office: false,
		latitude: 0,
		longitude: 0,
		delivery_message: '',
	};

	constructor(
		public dialogRef: MatDialogRef<TambahAlamatBaruDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public modalData: any,
		private route: ActivatedRoute,
		private router: Router,
		public dialog: MatDialog,
		private service: BaseService,
		private http: HttpClient,
		private http2: HttpService
	) {}

	ngOnInit(): void {
		this.subscribers = [];
		this.getProvince();
	}

	ngOnDestroy() {
		this.subscribers.forEach((x) => x.unsubscribe);
	}

	lihatTransaksi() {
		this.dialogRef.close();
		// this.router.navigate(['./transaction']);
	}

	tutupModal() {
		this.dialogRef.close();
	}

	onUserInputJenisPerusahaan(input) {
		console.log(input);
	}

	onUserInputNamaPerusahaan(input) {
		this.param.address_name = input;
	}

	onUserInputDetailPerusahaan(input) {
		this.param.address_detail = input;
	}

	onUserInputNamaPenerima(input) {
		this.param.recipient_name = input;
	}

	onUserInputNoTelp(input) {
		this.param.recipient_contact = input;
	}

	onUserInputCatatanPengiriman(input) {
		this.param.delivery_message = input;
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

	onProvinceSelected(province) {
		this.selectedProvince = province;
		this.param.province = this.selectedProvince.province;
		this.getDistrict();
	}

	getDistrict() {
		const url =
			AddressMasterDistrictUrl +
			'?province=' +
			this.selectedProvince.province;

		const sub = this.service
			.postData(url, false, false, false)
			.subscribe((resp) => {
				this.districts = resp.data;
				this.districts.forEach(
					(dis) =>
						(dis.label =
							titleCase(dis.district_type) + ' ' + dis.district)
				);
			});
		console.log(this.districts);
		this.subscribers.push(sub);
	}

	onDistrictSelected(district) {
		this.selectedDistrict = district;
		this.param.district = district.district;
		this.param.district_type = district.district_type;
		this.getSubDistrict();
	}

	getSubDistrict() {
		const url =
			AddressMasterSubDistrictUrl +
			'?province=' +
			this.selectedProvince.province +
			'&district=' +
			this.selectedDistrict.district;

		const sub = this.service
			.postData(url, false, false, false)
			.subscribe((resp) => {
				this.subdistricts = resp.data;
				this.subdistricts.forEach(
					(subdis) => (subdis.label = subdis.subdistrict)
				);
			});
		this.subscribers.push(sub);
	}

	onSubdistrictSelected(subdistrict) {
		console.log(subdistrict);
		this.selectedSubdistrict = subdistrict;
		this.param.subdistrict = subdistrict.subdistrict;
		this.getVillage();
	}

	getVillage() {
		const url =
			AddressMasterVillageUrl +
			'?province=' +
			this.selectedProvince.province +
			'&district=' +
			this.selectedDistrict.district +
			'&subdistrict=' +
			this.selectedSubdistrict.subdistrict;

		const sub = this.service
			.postData(url, false, false, false)
			.subscribe((resp) => {
				this.villages = resp.data;
				this.villages.forEach((v) => {
					v.label = v.village;
				});
			});
		this.subscribers.push(sub);
	}

	onVillageSelected(village) {
		this.selectedVillage = village;

		this.param.village = village.village;
		this.param.zipcode = village.zipcode;
	}

	submit() {
		const sub = this.http.post(AddressCreateUrl, this.param).pipe(
			map((resp: any): any => {
				return resp;
			}),
			catchError((err, caught: Observable<HttpEvent<any>>) => {
				if (err instanceof HttpErrorResponse && err.status == 401) {
					// this.storageService.clear();
					// this._document.defaultView.location.reload();
					return of(err as any);
				}
				throw err;
			})

			// map((model: HttpBodyRespModel): any => {
			// 	console.log(responseModel.convert);
			// 	return responseModel
			// 		? isArray
			// 			? this.mapArrayData(model.data, responseModel)
			// 			: responseModel.convert(model.data)
			// 		: this.responseData(model.data);
			// })
		);

		sub.subscribe((resp) => {
			this.dialogRef.close();
		});
	}

	batal() {
		this.dialogRef.close();
	}
}
