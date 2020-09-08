import { HttpBodyRespStatusModel } from './http-body-resp-status.model';

export class HttpBodyRespModel {
	public data: any;
	public status: HttpBodyRespStatusModel = new HttpBodyRespStatusModel();

	public convert(dto: any): HttpBodyRespModel {
		if (dto) {
			this.data = dto.data;
			this.status = new HttpBodyRespStatusModel().convert(dto.status);

			return this;
		} else {
			console.error('HttpBodyRespModel: Cannot Mapping Empty Data!');

			return this;
		}
	}
}
