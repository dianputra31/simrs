import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
	Component,
	EventEmitter,
	OnInit,
	Output,
	ViewChild,
} from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { CountdownComponent } from 'ngx-countdown';
import { map } from 'rxjs/operators';
import { RESPONSE } from 'src/app/app.constant';
import { CredentialModel } from 'src/app/core/auth/model/request/credential.model';
import { AuthService } from 'src/app/core/auth/service/auth.service';
import { HttpBodyRespModel } from '../../../../app/core/http-body-resp/model/http-body-resp.model';

@Component({
	selector: 'login-card2',
	templateUrl: './login-card2.component.html',
	styleUrls: ['./login-card2.component.scss'],
})
export class LoginCard2Component implements OnInit {
	isEmailFilled: boolean = false;
	form: FormGroup;
	firstFormGroup: FormGroup;
	secondFormGroup: FormGroup;
	isLinear = true;
	emailnya;
	email;
	loginbutton;
	datauser;
	isCompleted = false;
	errlogin;
	errotp;
	display = 'inline';
	tampil = 'none';
	public httpBodyRespModel = new HttpBodyRespModel();
	isArray?: boolean;

	otpnya: string;
	otp = new FormControl('');

	showOtpComponent = true;
	@ViewChild('ngOtpInput', { static: false }) private ngOtpInput: any;
	@ViewChild('stepper') private myStepper: MatStepper;
	@BlockUI() blockUI: NgBlockUI;

	config = {
		allowNumbersOnly: false,
		length: 5,
		isPasswordInput: false,
		disableAutoFocus: false,
		placeholder: '',
		inputStyles: {
			width: '50px',
			height: '50px',
		},
	};

	@ViewChild('countdown', { static: false })
	private counter: CountdownComponent;

	naconfig = {
		leftTime: 3,
		demand: false,
		format: 'mm:ss',
	};

	onOtpChange(otpnya, emailnya) {
		if (otpnya.length === 6) {
			this.secondFormGroup.controls['password'].setValue(otpnya);
			this.secondFormGroup.controls['email'].setValue(emailnya);
			this.secondFormGroup.valid;
		}
	}

	goBack() {
		// stepper.previous();
		this.myStepper.previous();
	}
	goForward() {
		this.myStepper.next();
		// stepper.next();
	}

	@ViewChild('ngOtpInput') ngOtpInputRef: any;
	resetNgOtpVal() {
		this.ngOtpInputRef.setValue('');
		this.secondFormGroup.controls['password'].setValue('');
	}

	public credential: CredentialModel;
	public loginForm: FormGroup;
	public loadingProgress: string;

	@Output()
	public loginStatusEmitter: EventEmitter<string> = new EventEmitter();

	constructor(
		private router: Router,
		private authService: AuthService,
		private formBuilder: FormBuilder,
		private http: HttpClient
	) {}

	ngOnInit() {
		this.credential = new CredentialModel();

		this.initForm();
		this.isLogin();

		this.firstFormGroup = new FormGroup({
			email: new FormControl('', [
				Validators.required,
				Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
			]),

			// password: new FormControl('', Validators.required),
		});

		this.loginForm = new FormGroup({
			email: new FormControl('', Validators.required),
			// password: new FormControl('', Validators.required),
		});

		this.secondFormGroup = new FormGroup({
			password: new FormControl('', [
				Validators.required,
				Validators.minLength(6),
			]),
			email: new FormControl('', Validators.required),
		});
	}

	public asemik() {
		this.blockUI.start();
	}

	public finishCount(e: Event) {
		if (e['action'] == 'done') {
			this.display = 'none';
			this.tampil = 'inline';
			this.errotp = 'OTP Expired!';
		}
	}

	public sendotp() {
		if (this.firstFormGroup.valid) {
			this.blockUI.start(); // Start blocking
			this.isCompleted = false;
			this.goBack();
			this.errlogin = '';

			return this.http
				.get(
					'http://172.16.204.6:8081/otp?email=' +
						this.firstFormGroup.value.email
				)
				.pipe(map((res: Response) => res.json()))
				.subscribe(
					(data) => {
						console.log(data);
					},
					(error: HttpErrorResponse) => {
						if (error.status === 400) {
							this.resetNgOtpVal();
							this.errlogin = 'Email Anda Belum Terdaftar!';
							this.blockUI.stop();
						} else {
							this.isCompleted = true;
							this.naconfig = {
								leftTime: 180,
								demand: false,
								format: 'mm:ss',
							};
							this.display = 'inline';
							this.tampil = 'none';
							this.resetNgOtpVal();
							this.goForward();
							this.emailnya = this.firstFormGroup.value.email;

							this.errotp = '';
							this.blockUI.stop();
						}
					}
				);
		} else {
			console.log('not valid');
		}
	}

	public masuk() {
		if (this.secondFormGroup.valid) {
			console.log('here');
			console.log(this.secondFormGroup.value);
		} else {
			console.log('not yet');
			console.log(this.secondFormGroup.value);
		}
	}

	public submit() {
		if (this.secondFormGroup.valid) {
			this.blockUI.start(); // Start blocking
			this.initLoadingBar();
		} else {
			console.log('empty otp!');
		}
	}

	private initLoadingBar() {
		this.onProgress();
	}

	private initForm() {
		this.loginForm = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
			// password: new FormControl('', Validators.required),
		});
	}

	public onProgress() {
		this.credential.email = this.secondFormGroup.get('email').value;
		this.credential.otp_code = this.secondFormGroup.get('password').value;

		this.login();
	}

	public login() {
		if (this.secondFormGroup.valid) {
			const subs = this.authService.login(this.credential).subscribe(
				(resp) => {
					if (resp.status.rc === RESPONSE.SUCCESS) {
						setTimeout(() => {
							this.router.navigate(['./']);
						}, 15000);
					} else if (resp.status.rc === RESPONSE.USER_NOT_FOUND) {
						setTimeout(() => {}, 1000);
					} else if (resp.status.rc === RESPONSE.TIMEOUT) {
					} else if (
						resp.status.rc === RESPONSE.BAD_REQUEST_DOUCHEBAG
					) {
						this.errotp = 'OTP Expired!';
						console.log(resp.data);
					}
				},
				(error: HttpErrorResponse) => {
					if (error.status === 400) {
						this.errotp = error.error.data;
						if (error.error.data == 'OTP Expired!') {
							this.display = 'none';
							this.tampil = 'inline';
						}
						this.blockUI.stop();
					}
				}
			);

			// this.subscribers.push(subs);
		} else {
			this.secondFormGroup.markAllAsTouched();
		}
		setTimeout(() => {
			this.blockUI.stop(); // Stop blocking
		}, 25000);
	}

	public emitLoginStatus(value: string) {
		this.loginStatusEmitter.emit(value);
	}

	public isLogin() {
		if (this.authService.isAuthenticated()) {
			this.navigateToTransaction();
		}
	}

	public navigateToTransaction() {
		this.router.navigate(['./home']);
	}
}
