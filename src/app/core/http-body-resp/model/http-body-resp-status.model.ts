export class HttpBodyRespStatusModel {
	public rc: number; //response code
	public msg: string; //message

	public convert(dto: any) {
		if (dto) {
			this.rc = dto.rc;
			this.msg = dto.msg;

			return this;
		} else {
			console.error('HttpBodyRespStatus: Cannot Mapping Empty Data!');

			return this;
		}
	}
}
