import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/service/auth.service';

@Component({
	selector: 'app-login-layout',
	templateUrl: './login-layout.component.html',
	styleUrls: ['./login-layout.component.scss'],
})
export class LoginLayoutComponent implements OnInit {
	constructor(private router: Router, public authService: AuthService) {}

	ngOnInit() {}
	public isLogin() {
		if (this.authService.isAuthenticated()) {
			this.navigateToTransaction();
		}
	}

	public getLoginStatus(value: string) {
		console.log(value);
		if (value === 'success') {
			this.navigateToTransaction();
		}
	}

	public navigateToTransaction() {
		this.router.navigate(['./home']);
	}

	public connectionTimeout() {
		// this.toastr.error('The Connection Timeout');
	}
}
