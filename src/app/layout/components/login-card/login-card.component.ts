import { Component, OnInit } from '@angular/core';
import { CredentialModel } from 'src/app/core/auth/model/request/credential.model';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/service/auth.service';
import { RESPONSE } from 'src/app/app.constant';

@Component({
  selector: 'login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent implements OnInit {
  public credential: CredentialModel;
	public loginForm: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit() {

		this.credential = new CredentialModel();
    this.initForm();
  }

  public submit() {
		this.initLoadingBar();
  }
  
  private initLoadingBar() {
			this.onProgress();
  }
  
  private initForm() {
		this.loginForm = new FormGroup({
			username: new FormControl('', Validators.required),
			password: new FormControl('', Validators.required),
		});
  }
  
  public onProgress() {
		this.credential.username = this.loginForm.get('username').value;
		this.credential.password = this.loginForm.get('password').value;

		this.login();
  }
  
  public login() {
		if (this.loginForm.valid) {
			const subs = this.authService
				.login(this.credential)
				.subscribe((resp) => {
					if (resp.status.rc === RESPONSE.SUCCESS) {

						setTimeout(() => {
							// this.progressBarValue = 100;
							// this.emitLoginStatus(this.loadingProgress);
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
}
