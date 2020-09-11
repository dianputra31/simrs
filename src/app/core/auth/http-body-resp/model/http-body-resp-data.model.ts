export class HttpBodyRespDataModel {
	public access_token: string; //response code
	public token_type: string; //message

	public convert(dto: any) {
		if (dto) {
			this.access_token = dto.access_token;
			this.token_type = dto.token_type;

			return this;
		} else {
			console.error('HttpBodyRespData: Cannot Mapping Empty Data!');

			return this;
		}
	}
}
