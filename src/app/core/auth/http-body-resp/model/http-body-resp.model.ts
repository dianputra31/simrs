import { HttpBodyRespDataModel } from './http-body-resp-data.model';
import { HttpBodyRespStatusModel } from './http-body-resp-status.model';

export class HttpBodyRespModel {
	public result: any;
	public status: HttpBodyRespStatusModel = new HttpBodyRespStatusModel();
	public data: any;

	public convert(dto: any): HttpBodyRespModel {
		console.log(dto);
		// console.log("here");
		if (dto) {
			this.result = dto.result;
			this.status = new HttpBodyRespStatusModel().convert(dto.status);
			this.data = new HttpBodyRespDataModel().convert(dto.data);

			return this;
		} else {
			console.error('HttpBodyRespModel: Cannot Mapping Empty Data!');

			return this;
		}
	}
}
