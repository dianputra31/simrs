import { Component, Inject, OnInit } from '@angular/core';
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import {
	AddressEditUrl,
	AddressMasterDistrictUrl,
	AddressMasterProvinceUrl,
	AddressMasterSubDistrictUrl,
	AddressMasterVillageUrl,
	RESPONSE,
	titleCase,
} from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';

@Component({
	selector: 'edit-alamat-dialog',
	templateUrl: './edit-alamat-dialog.component.html',
	styleUrls: ['./edit-alamat-dialog.component.scss'],
})
export class EditAlamatDialogComponent implements OnInit {
	@BlockUI() blockUI: NgBlockUI;
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
	selectedJenis: any;
	address;

	states: any[] = [
		{ jenis: 'PT', label: 'PT' },
		{ jenis: 'CV', label: 'CV' },
		{ jenis: 'Firma', label: 'Firma' },
	];

	constructor(
		public dialogRef: MatDialogRef<EditAlamatDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private route: ActivatedRoute,
		private router: Router,
		public dialog: MatDialog,
		private service: BaseService,
		private http: HttpService
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

		this.selectedJenis = {
			jenis: 'PT',
			label: 'PT',
		};

		this.selectedDistrict = {
			district: this.address.district,
			district_type: this.address.district_type,
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
		this.blockUI.start();
		const sub = this.http.post(AddressMasterProvinceUrl, {}).subscribe(
			(resp) => {
				this.blockUI.stop();
				if (resp.status.rc == RESPONSE.SUCCESS) {
					this.provinces = resp.data;
					this.provinces.forEach(
						(prov) => (prov.label = prov.province)
					);
				} else {
					this.service.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.blockUI.stop();
				this.http.handleError(error);
			}
		);
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

		this.blockUI.start();
		const sub = this.http.post(url, {}).subscribe(
			(resp) => {
				this.blockUI.stop();
				if (resp.status.rc == RESPONSE.SUCCESS) {
					this.districts = resp.data;
					this.districts.forEach((dis) => {
						dis.label =
							titleCase(dis.district_type) + ' ' + dis.district;
						delete dis.district_type;
					});
				} else {
					this.service.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.blockUI.stop();
				this.http.handleError(error);
			}
		);
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

		this.blockUI.start();
		const sub = this.http.post(url, {}).subscribe(
			(resp) => {
				this.blockUI.stop();
				if (resp.status.rc == RESPONSE.SUCCESS) {
					this.subdistricts = resp.data;
					this.subdistricts.forEach(
						(subdis) => (subdis.label = subdis.subdistrict)
					);
				} else {
					this.service.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.blockUI.stop();
				this.http.handleError(error);
			}
		);
		this.subscribers.push(sub);
	}

	onSubdistrictSelected(subdistrict) {
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

		this.blockUI.start();
		const sub = this.http.post(url, {}).subscribe(
			(resp) => {
				this.blockUI.stop();
				if (resp.status.rc == RESPONSE.SUCCESS) {
					this.villages = resp.data;
					this.villages.forEach((v) => {
						v.label = v.village;
					});
				} else {
					this.service.showAlert(resp.status.msg);
				}
			},
			(error) => {
				this.blockUI.stop();
				this.http.handleError(error);
			}
		);
		this.subscribers.push(sub);
	}

	onVillageSelected(village) {
		this.selectedVillage = village;

		this.address.village = village.village;
		this.address.zipcode = village.zipcode;
	}

	submit() {
		this.blockUI.start();
		const sub = this.http
			.post(AddressEditUrl + `/${this.address.id}`, this.address)
			.subscribe(
				(resp) => {
					this.blockUI.stop();
					if (resp.status.rc == RESPONSE.SUCCESS) {
						this.dialogRef.close();
					} else {
						this.service.showAlert(resp.status.msg);
					}
				},
				(error) => {
					this.blockUI.stop();
					this.http.handleError(error);
				}
			);
	}

	batal() {
		this.dialogRef.close();
	}
}
