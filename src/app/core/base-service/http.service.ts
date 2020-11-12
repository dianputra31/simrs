import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MESSAGE_DICT } from '../../app.constant';
import { StorageService } from '../storage/service/storage.service';
import { BaseService } from './service/base.service';

@Injectable({
	providedIn: 'root',
})
export class HttpService {
	constructor(
		public http: HttpClient,
		private storageService: StorageService,
		private dialogService: BaseService,
		@Inject(DOCUMENT) private _document: Document
	) {}

	public get(url: string, param?: any): Observable<any> {
		return this.http.get(url, param).pipe(
			map((resp: any): any => {
				return resp;
			}),
			catchError((err, caught: Observable<HttpEvent<any>>) => {
				if (err instanceof HttpErrorResponse && err.status == 401) {
					this.storageService.clear();
					this._document.defaultView.location.reload();
					return of(err as any);
				}
				throw err;
			})
		);
	}

	public post(url: string, param: any): Observable<any> {
		return this.http.post(url, param).pipe(
			map((resp: any): any => {
				return resp;
			}),
			catchError((err, caught: Observable<HttpEvent<any>>) => {
				if (err instanceof HttpErrorResponse && err.status == 401) {
					this.storageService.clear();
					this._document.defaultView.location.reload();
					return of(err as any);
				}
				throw err;
			})
		);
	}

	public handleError(error) {
		switch (error.status) {
			case 400: {
				this.dialogService.showAlert(MESSAGE_DICT.ERROR_MESSAGE);
				break;
			}
			case 404: {
				this.dialogService.showAlert(MESSAGE_DICT.ERROR_MESSAGE);
				break;
			}
			case 500: {
				this.dialogService.showAlert(MESSAGE_DICT.ERROR_MESSAGE);
				break;
			}
		}
	}
}
