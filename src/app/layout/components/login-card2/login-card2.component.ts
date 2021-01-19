import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import { OtpService, RESPONSE } from 'src/app/app.constant';
import { HttpService } from '../../../core/base-service/http.service';
import {
	AuthServiceLoginPathConst,
	AuthServiceProfilePathConst
} from '../../../core/const/auth-service-path.const';
import { StorageService } from '../../../core/storage/service/storage.service';

@Component({
	selector: 'login-card2',
	templateUrl: './login-card2.component.html',
	styleUrls: ['./login-card2.component.scss'],
})
export class LoginCard2Component implements OnInit {
	subscribers: Subscription[] = [];
	isCountingDown: Boolean = false;

	firstFormGroup: FormGroup;
	secondFormGroup: FormGroup;

	errlogin;
	errotp;

	naconfig = {};

	otpnya: string;

	@ViewChild('stepper') private myStepper: MatStepper;
	@BlockUI() blockUI: NgBlockUI;

	constructor(
		private router: Router,
		private http: HttpService,
		private storageService: StorageService
	) {}

	ngOnInit() {
		this.isLogin();

		this.firstFormGroup = new FormGroup({
			email: new FormControl('', [
				Validators.required,
				Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
			]),
		});

		this.secondFormGroup = new FormGroup({
			password: new FormControl('', [
				Validators.required,
				Validators.minLength(6),
			]),
			email: new FormControl('', Validators.required),
		});
	}

	onOtpChange(otpnya) {
		if (otpnya.length === 6) {
			this.secondFormGroup.controls['password'].setValue(otpnya);
			this.secondFormGroup.controls['email'].setValue(
				this.firstFormGroup.value.email
			);
		}
	}

	@ViewChild('ngOtpInput') ngOtpInputRef: any;
	resetNgOtpVal() {
		this.ngOtpInputRef.setValue('');
		this.secondFormGroup.controls['password'].setValue('');
	}

	public finishCount(e: Event) {
		if (e['action'] == 'done') {
			this.errotp = 'OTP Expired!';
			this.isCountingDown = false;
		}
	}

	public sendotp() {
		this.blockUI.start(); // Start blocking

		const url = OtpService + '?email=' + this.firstFormGroup.value.email;
		this.http.get(url).subscribe(
			(resp) => {
				if (resp.status.rc == RESPONSE.SUCCESS) {
					this.blockUI.stop();

					this.naconfig = {
						leftTime: 180,
						demand: false,
						format: 'mm:ss',
					};

					this.isCountingDown = true;

					this.resetNgOtpVal();
					this.myStepper.next();

					this.errotp = '';
				} else {
					alert(resp.status.msg);
				}
			},
			(error: any) => {
				this.blockUI.stop();
				if (error.status === 400) {
					this.resetNgOtpVal();
					this.errlogin = error.error.data;
				}
			}
		);
	}

	public login() {
		var param = {
			email: this.secondFormGroup.get('email').value,
			otp_code: this.secondFormGroup.get('password').value,
		};
		this.blockUI.start();

		this.http.post(AuthServiceLoginPathConst, param).subscribe(
			(resp) => {
				this.blockUI.stop();
				if (resp.status.rc === RESPONSE.SUCCESS) {
					this.storageService.storeToken(resp.data.access_token);
					this.getUserProfile();
				} else {
					console.log(resp.status);
				}
			},
			(error: any) => {
				this.blockUI.stop();
				if (error.status === 400) {
					this.errotp = error.error.data;
				}
			}
		);
	}

	public getUserProfile() {
		this.blockUI.start();
		this.http.get(AuthServiceProfilePathConst).subscribe(
			(resp) => {
				this.blockUI.stop();
				if (resp.status.rc === RESPONSE.SUCCESS) {
					localStorage.setItem(
						'profile',
						JSON.stringify(resp.data.profile)
					);
					localStorage.setItem(
						'address',
						JSON.stringify(resp.data.delivery_address)
					);
					localStorage.setItem(
						'company',
						JSON.stringify(resp.data.company)
					);

					this.router.navigate(['./home']);
				} else {
					alert(resp.status.msg);
				}
			},
			(error: any) => {
				this.blockUI.stop();
				if (error.status === 400) {
					this.errotp = error.error.data;
				}
			}
		);
	}

	public isLogin() {
		if (this.storageService.getToken()) {
			this.router.navigate(['./home']);
		}
	}
}
