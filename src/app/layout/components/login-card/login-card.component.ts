import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CountdownComponent } from 'ngx-countdown';
import { RESPONSE } from 'src/app/app.constant';
import { CredentialModel } from 'src/app/core/auth/model/request/credential.model';
import { AuthService } from 'src/app/core/auth/service/auth.service';




@Component({
	selector: 'login-card',
	templateUrl: './login-card.component.html',
	styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent implements OnInit {
	isEmailFilled: boolean = false;
	form: FormGroup;
	secondFormGroup: FormGroup;

	otp: string;
	showOtpComponent = true;
	@ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;


	config = {
		allowNumbersOnly: false,
		length: 5,
		isPasswordInput: false,
		disableAutoFocus: false,
		placeholder: '',
		inputStyles: {
			'width': '50px',
			'height': '50px'
		}
	};


	@ViewChild('countdown', { static: false }) private counter: CountdownComponent;

	naconfig = {
		leftTime: 180, demand: true, format: 'mm:ss'
	};

	onOtpChange(otp) {
		this.otp = otp;
	}


	public credential: CredentialModel;
	public loginForm: FormGroup;
	public loadingProgress: string;

	@Output()
	public loginStatusEmitter: EventEmitter<string> = new EventEmitter();

	constructor(private router: Router, private authService: AuthService,
		private formBuilder: FormBuilder) { }

	// ngOnInit() {
	// 	this.credential = new CredentialModel();
	// 	this.initForm();
	// 	this.isLogin();
	// }

	ngOnInit() {
		this.form = this.formBuilder.group({
			email: ['',
				[
					Validators.required,
					Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
				]
			],
			//   password: [null, Validators.required],
		});


		this.secondFormGroup = this.formBuilder.group({
			otp: ['', Validators.required],
		});



	}

	public mbel() {
		this.naconfig = {
			leftTime: 180, demand: false, format: 'mm:ss'
		};
	}

	public submit() {
		this.initLoadingBar();
	}

	private initLoadingBar() {
		this.onProgress();
	}

	private initForm() {
		this.loginForm = new FormGroup({
			email: new FormControl('', Validators.required),
			// password: new FormControl('', Validators.required),
		});
	}

	public onProgress() {
		this.credential.username = this.loginForm.get('email').value;
		// this.credential.password = this.loginForm.get('password').value;

		this.login();
	}

	public login() {
		if (this.loginForm.valid) {
			const subs = this.authService
				.login(this.credential)
				.subscribe((resp) => {
					this.loadingProgress = 'start';
					if (resp.status.rc === RESPONSE.SUCCESS) {
						this.loadingProgress = 'success';
						setTimeout(() => {
							// this.progressBarValue = 100;
							this.emitLoginStatus(this.loadingProgress);
						}, 1000);
					} else if (resp.status.rc === RESPONSE.USER_NOT_FOUND) {
						// this.progressBarValue = 100;
						// this.loadingProgress = 'failed';

						setTimeout(() => {
							// this.buttonStatus = 'initial';
							// this.progressStatus = 'initial';
						}, 1000);
					} else if (resp.status.rc === RESPONSE.TIMEOUT) {
						// this.buttonStatus = 'initial';
						// this.progressStatus = 'initial';
					}
				});

			// this.subscribers.push(subs);
		} else {
			this.loginForm.markAllAsTouched();
		}
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
