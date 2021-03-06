import { DOCUMENT } from '@angular/common';
import {
	HttpClient,
	HttpErrorResponse,
	HttpEvent,
	HttpHeaders
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AnyAlertComponent } from '../../../shared/components/any-alert/any-alert.component';
import { HttpBodyRespModel } from '../../http-body-resp/model/http-body-resp.model';
import { StorageService } from '../../storage/service/storage.service';
import { generateHttpParams } from '../../util/http-param-generator';

@Injectable({
	providedIn: 'root',
})
export class BaseService {
	public httpBodyRespModel = new HttpBodyRespModel();

	constructor( 
		public http: HttpClient,
		private router: Router,
		private storageService: StorageService,
		@Inject(DOCUMENT) private _document: Document,
		public dialog: MatDialog,
	) {}

	public getData(
		url: string,
		responseModel: any,
		requestParamModel?: any,
		isArray?: boolean
	): Observable<any> {
		var params = null;
		if (responseModel !== false) {
			params = requestParamModel
				? generateHttpParams(requestParamModel.convert())
				: null;
		} else {
			params = requestParamModel;
		}

		return responseModel !== false
			? this.http.get(url, { params }).pipe(
					map(
						(resp: any): HttpBodyRespModel => {
							console.log('getdata-without-token: ', resp);
							// this.httpBodyRespMapper.mappingDTOToModel(resp)
							return this.httpBodyRespModel.convert(resp);
						}
					),
					map((model: HttpBodyRespModel): any => {
						return isArray
							? this.mapArrayData(model.data, responseModel)
							: this.mapObjectData(model.data, responseModel);
					}),
					catchError((err, caught: Observable<HttpEvent<any>>) => {
						if (
							err instanceof HttpErrorResponse &&
							err.status == 401
						) {
							this.storageService.clear();
							this._document.defaultView.location.reload();
							return of(err as any);
						}
						throw err;
					})
			  )
			: this.http.get(url, { params });
	}

	public getDataWithToken(
		url: string,
		responseModel: any,
		requestParamModel?: any,
		isArray?: boolean,
		accessToken?: any
	): Observable<any> {
		const params = requestParamModel
			? generateHttpParams(requestParamModel.convert())
			: null;

		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + accessToken,
		});
		return responseModel !== false
			? this.http.get(url, { headers, params }).pipe(
					map(
						(resp: any): HttpBodyRespModel =>
							// this.httpBodyRespMapper.mappingDTOToModel(resp)
							this.httpBodyRespModel.convert(resp)
					),
					map((model: HttpBodyRespModel): any => {
						return isArray
							? this.mapArrayData(model.data, responseModel)
							: this.mapObjectData(model.data, responseModel);
					}),
					catchError((err, caught: Observable<HttpEvent<any>>) => {
						if (
							err instanceof HttpErrorResponse &&
							err.status == 401
						) {
							this.storageService.clear();
							this._document.defaultView.location.reload();
							return of(err as any);
						}
						throw err;
					})
			  )
			: this.http.get(url, { headers, params });
	}

	public getDataPaging(
		url: string,
		responseModel: any,
		requestParamModel?: any
	): Observable<HttpBodyRespModel> {
		const params = requestParamModel
			? generateHttpParams(requestParamModel.convert())
			: null;

		return this.http.get(url, { params }).pipe(
			map(
				(resp: any): HttpBodyRespModel =>
					this.httpBodyRespModel.convert(resp)
			),
			map(
				(model: HttpBodyRespModel): HttpBodyRespModel => {
					// model.result.data = this.mapArrayData(
					// 	model.result.data,
					// 	responseModel
					// );
					return model;
				}
			)
		);
	}

	public postData(
		url: string,
		requestBodyModel: any,
		responseModel?: any,
		requestParamModel?: any,
		isArray?: boolean
	): Observable<any> {
		const params = requestParamModel
			? generateHttpParams(requestParamModel.convert())
			: null;

		return responseModel !== false
			? this.http.post(url, requestBodyModel.convert(), { params }).pipe(
					map((resp: any): any => {
						return this.httpBodyRespModel.convert(resp);
					}),
					catchError((err, caught: Observable<HttpEvent<any>>) => {
						if (
							err instanceof HttpErrorResponse &&
							err.status == 401
						) {
							this.storageService.clear();
							this._document.defaultView.location.reload();
							return of(err as any);
						}
						throw err;
					})
					// map((model: HttpBodyRespModel): any => {
					// 	console.log(responseModel.convert);
					// 	return responseModel
					// 		? isArray
					// 			? this.mapArrayData(model.data, responseModel)
					// 			: responseModel.convert(model.data)
					// 		: this.responseData(model.data);
					// })
			  )
			: this.http.post(
					url,
					params == null
						? requestBodyModel
						: requestBodyModel.convert(),
					{ params }
			  );
	}

	public postData2(
		url: string,
		requestBodyModel: any,
		responseModel?: any,
		requestParamModel?: any,
		isArray?: boolean
	): Observable<any> {
		const params = requestParamModel
			? generateHttpParams(requestParamModel.convert())
			: null;

		return responseModel !== false
			? this.http.post(url, requestBodyModel.convert(), { params }).pipe(
					map((resp: any): any => {
						return this.httpBodyRespModel.convert(resp);
					}),
					map((model: HttpBodyRespModel): any => {
						console.log(responseModel.convert);
						return responseModel
							? isArray
								? this.mapArrayData(model.data, responseModel)
								: responseModel.convert(model.data)
							: this.responseData(model.data);
					}),
					catchError((err, caught: Observable<HttpEvent<any>>) => {
						if (
							err instanceof HttpErrorResponse &&
							err.status == 401
						) {
							this.storageService.clear();
							this._document.defaultView.location.reload();
							return of(err as any);
						}
						throw err;
					})
			  )
			: this.http.post(
					url,
					params == null
						? requestBodyModel
						: requestBodyModel.convert(),
					{ params }
			  );
	}

	public putData(
		url: string,
		requestBodyModel: any,
		responseModel?: any,
		requestParamModel?: any,
		isArray?: boolean
	): Observable<any> {
		const params = requestParamModel
			? generateHttpParams(requestParamModel.convert())
			: null;

		return this.http.put(url, requestBodyModel.convert(), { params }).pipe(
			map(
				(resp: any): HttpBodyRespModel =>
					this.httpBodyRespModel.convert(resp)
			),
			map((model: HttpBodyRespModel): any => {
				// return responseModel
				// 	? isArray
				// 		? this.mapArrayData(model.result.data, responseModel)
				// 		: responseModel.convert()
				// 	: this.responseData(model.result.data);
			})
		);
	}

	public deleteData(url: string, requestParamModel: any): Observable<any> {
		const params = requestParamModel
			? generateHttpParams(requestParamModel.convert())
			: null;

		return this.http.delete(url, { params }).pipe(
			map(
				(resp: any): HttpBodyRespModel =>
					this.httpBodyRespModel.convert(resp)
			),
			map((model: HttpBodyRespModel): any => {
				// return this.responseData(model.result.data);
			})
		);
	}

	public patchData(
		url: string,
		requestBodyModel: any,
		responseModel?: any,
		requestParamModel?: any,
		isArray?: boolean
	): Observable<any> {
		const params = requestParamModel
			? generateHttpParams(requestParamModel.convert())
			: null;

		return this.http
			.patch(url, requestBodyModel.convert(), { params })
			.pipe(
				map(
					(resp: any): HttpBodyRespModel =>
						this.httpBodyRespModel.convert(resp)
				),
				map((model: HttpBodyRespModel): any => {
					return responseModel
						? isArray
							? this.mapArrayData(model.data, responseModel)
							: responseModel.convert()
						: this.responseData(model.data);
				})
			);
	}

	private mapObjectData(dto: any, responseModel: any) {
		if (Object.entries(dto).length === 0) {
			return null;
		}

		const dataModel = new responseModel().convert(dto);

		return dataModel;
	}

	private mapArrayData(dtos: any[], responseModel: any) {
		const dataModel = dtos.reduce((result, each) => {
			const model = new responseModel();
			result.push(model.convert(each));

			return result;
		}, []);

		return dataModel;
	}

	private responseData(status: boolean) {
		return { data: status };
	}

	public showAlert(msg: string){
		this.dialog.open(AnyAlertComponent, {
				  data: {
					msg: msg
				  }
				});
	}
}
