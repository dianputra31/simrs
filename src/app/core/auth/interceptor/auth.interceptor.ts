import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../../storage/service/storage.service';

export class AuthInterceptor implements HttpInterceptor {
	constructor(public storageService: StorageService) {}

	public intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		request = request.clone({
			setHeaders: this.generateHeader(),
		});

		return next.handle(request);
	}

	private generateHeader() {
		const header = {};

		header['Content-Type'] = 'application/json';

		const token = this.storageService.getToken();
		if (token) {
			header['Authorization'] = 'Bearer ' + token;
		}

		return header;
	}
}
