export class TransactionStatusOptionResponseModel {
	public status_code: string;
	public status_name: string;

	public convert(dto: any) {
		this.status_code = dto.status_code;
		this.status_name = dto.status_name;
		return this;
	}
}
