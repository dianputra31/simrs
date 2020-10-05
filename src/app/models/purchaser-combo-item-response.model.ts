export class PurchaserComboItemResponseModel {
	public id: number;
	public fullname: string;
	public company_id: number;
	public role_id: number;
	public email: string;

	public convert(dto: any) {
		this.id = dto.id
		this.fullname = dto.fullname
		this.company_id = dto.company_id
		this.role_id = dto.role_id
		this.email = dto.email
		return this;
	}
}