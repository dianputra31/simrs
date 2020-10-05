import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router) {}

	public canActivate(): Observable<boolean> {
		this.authService.isAuthenticated().subscribe((resp) => {
			console.log(resp);
			if (!resp) {
				this.router.navigate(['/']);
			}
		});

		return this.authService.isAuthenticated().pipe(
			map((resp) => {
				console.log(resp);
				return resp;
			})
		);
	}
}
