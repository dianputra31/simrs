import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Observable, Subscription } from 'rxjs';
import { Login, OtpService, RESPONSE } from 'src/app/app.constant';
import { HttpService } from '../../../core/base-service/http.service';
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

	errlogin: any;
	errotp: string;
	resp: any;
	
	status: any;

	private _jsonURL = 'assets/json/login.json';
	

	naconfig = {};

	otpnya: string;

	@ViewChild('stepper') private myStepper: MatStepper;
	@BlockUI() blockUI: NgBlockUI;

	constructor(
		private router: Router,
		private http: HttpService,
		private storageService: StorageService,
		private httpClient: HttpClient
	) {}


	public getJSON(): Observable<any> {
		return this.http.get(this._jsonURL);
	  }

	ngOnInit() {
		this.isLogin();

		

		this.firstFormGroup = new FormGroup({
			email: new FormControl('', [
				Validators.required,
				// Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
			]),
			password: new FormControl('', [
				Validators.required,
				Validators.minLength(6),
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

	onOtpChange(otpnya: string | any[]) {
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
			email: this.firstFormGroup.value.email,
			password: this.firstFormGroup.value.password,
		};
		this.blockUI.start();

		this.http.post(Login, param).subscribe(	
		// this.getJSON().subscribe(
			(resp) => {
				// this.blockUI.stop();
				if (resp.status.rc === RESPONSE.SUCCESS) {
					this.storageService.storeToken(resp.data.access_token);
					this.getUserProfile(resp);
					this.router.navigate(['./home']);
				} else {
					console.log(resp.status);
				}
		  },
			(error: any) => {
				console.log(error);
				this.blockUI.stop();
				if (error.status === 400) {
					this.errotp = error.error.data;
				}
			}
		  );

		// this.http.post(AuthServiceLoginPathConst, param).subscribe(
		// 	(resp) => {
		// 		this.blockUI.stop();
		// 		if (resp.status.rc === RESPONSE.SUCCESS) {
		// 			this.storageService.storeToken(resp.data.access_token);
		// 			this.getUserProfile();
		// 		} else {
		// 			console.log(resp.status);
		// 		}
		// 	},
		// 	(error: any) => {
		// 		this.blockUI.stop();
		// 		if (error.status === 400) {
		// 			this.errotp = error.error.data;
		// 		}
		// 	}
		// );
	}

	public getUserProfile(resp) {
		console.log(resp);
		// this.blockUI.start();
		// this.http.get(AuthServiceProfilePathConst).subscribe(
			// this.getJSON().subscribe(
			// (resp) => {
				// this.blockUI.stop();
				// if (resp.status.rc === RESPONSE.SUCCESS) {
					localStorage.setItem(
						'profile',
						JSON.stringify(resp.data.profile)
					);
					localStorage.setItem(
						'email',
						JSON.stringify(resp.data.email)
					);
					localStorage.setItem(
						'access_token',
						JSON.stringify(resp.data.access_token)
					);
					localStorage.setItem(
						'role',
						JSON.stringify(resp.data.role)
					);
					localStorage.setItem(
						'company',
						JSON.stringify(resp.data.company)
					);

					this.router.navigate(['./home']);
				// } else {
				// 	alert(resp.status.msg);
				// }
			// },
			// (error: any) => {
				this.blockUI.stop();
			// 	if (error.status === 400) {
			// 		this.errotp = error.error.data;
			// 	}
			// }
		// );
	}

	public isLogin() {
		if (this.storageService.getToken()) {
			this.router.navigate(['./home']);
		}
	}
}
