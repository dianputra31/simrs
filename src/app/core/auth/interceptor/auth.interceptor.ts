import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

export class AuthInterceptor implements HttpInterceptor {
	constructor(private authService: AuthService) {}

	public intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		request = request.clone({
			setHeaders: this.generateHeader(true, true, true),
		});

		return next.handle(request);
	}

	private generateHeader(
		withContentType: boolean,
		withToken: boolean,
		withEmail: boolean
	) {
		const header = {};

		if (withContentType) {
			header['Content-Type'] = 'application/json';
		}

		if (withToken) {
			const token = this.authService.getToken();

			if (token) {
				header['access_token'] = token;
			}
		}

		if (withEmail) {
			const email = this.authService.getEmail();

			if (email) {
				header['email'] = email;
			}
		}

		return header;
	}
}
