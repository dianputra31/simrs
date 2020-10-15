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
	AddressEditUrl,
	AddressMasterDistrictUrl,
	AddressMasterProvinceUrl,
	AddressMasterSubDistrictUrl,
	AddressMasterVillageUrl,
} from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';

@Component({
	selector: 'edit-alamat-dialog',
	templateUrl: './edit-alamat-dialog.component.html',
	styleUrls: ['./edit-alamat-dialog.component.scss'],
})
export class EditAlamatDialogComponent implements OnInit {
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
	address;

	constructor(
		public dialogRef: MatDialogRef<EditAlamatDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private route: ActivatedRoute,
		private router: Router,
		public dialog: MatDialog,
		private service: BaseService,
		private http: HttpClient
	) {
		console.log(data.address);
		this.address = data.address;
	}

	ngOnInit(): void {
		this.subscribers = [];

		this.getProvince();

		this.selectedProvince = {
			province: this.address.province,
			label: this.address.province,
		};

		this.selectedDistrict = {
			district: this.address.district,
			label: this.address.district,
		};

		this.selectedSubdistrict = {
			subdistrict: this.address.subdistrict,
			label: this.address.subdistrict,
		};

		this.selectedVillage = {
			village: this.address.village,
			zipcode: this.address.zipcode,
			label: this.address.village,
		};

		this.onProvinceSelected(this.selectedProvince);
		this.onDistrictSelected(this.selectedDistrict);
		this.onSubdistrictSelected(this.selectedSubdistrict);
		this.onVillageSelected(this.selectedVillage);
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
		this.address.address_name = input;
	}

	onUserInputDetailPerusahaan(input) {
		this.address.address_detail = input;
	}

	onUserInputNamaPenerima(input) {
		this.address.recipient_name = input;
	}

	onUserInputNoTelp(input) {
		this.address.recipient_contact = input;
	}

	onUserInputCatatanPengiriman(input) {
		this.address.delivery_message = input;
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
		this.address.province = this.selectedProvince.province;
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
				this.districts.forEach((dis) => {
					dis.label = dis.district;
					delete dis.district_type;
				});
			});
		this.subscribers.push(sub);
	}

	onDistrictSelected(district) {
		this.selectedDistrict = district;
		this.address.district = district.district;
		this.address.district_type = district.district_type;
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
		this.address.subdistrict = subdistrict.subdistrict;
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

		this.address.village = village.village;
		this.address.zipcode = village.zipcode;
	}

	submit() {
		console.log(this.address);
		const sub = this.http
			.post(AddressEditUrl + `/${this.address.id}`, this.address)
			.pipe(
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
