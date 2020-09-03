import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpBodyRespModel } from '../../http-body-resp/model/http-body-resp.model';
import { generateHttpParams } from '../../util/http-param-generator';

@Injectable({
	providedIn: 'root',
})
export class BaseService {
	public httpBodyRespModel = new HttpBodyRespModel();

	constructor(public http: HttpClient) {}

	public getData(
		url: string,
		responseModel: any,
		requestParamModel?: any,
		isArray?: boolean
	): Observable<any> {
		const params = requestParamModel
			? generateHttpParams(requestParamModel.convert())
			: null;

		return this.http.get(url, { params }).pipe(
			map(
				(resp: any): HttpBodyRespModel => {
					console.log(resp);
					// this.httpBodyRespMapper.mappingDTOToModel(resp)
					return this.httpBodyRespModel.convert(resp);
				}
			),
			map((model: HttpBodyRespModel): any => {
				return isArray
					? this.mapArrayData(model.data, responseModel)
					: this.mapObjectData(model.data, responseModel);
			})
		);
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

		return this.http.post(url, requestBodyModel.convert(), { params }).pipe(
			map(
				(resp: any): HttpBodyRespModel =>
					this.httpBodyRespModel.convert(resp)
			),
			map((model: HttpBodyRespModel): any => {
				return responseModel
					? isArray
						? this.mapArrayData(model.data, responseModel)
						: responseModel.convert(model.data)
					: this.responseData(model.data);
			})
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
}
