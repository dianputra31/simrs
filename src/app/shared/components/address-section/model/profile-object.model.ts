export class ProfileObjectModel {
	public company_id: number;
	public default_address_id: number;
	public email: string;
	public fullname: string;
	public profile_picture_url: string;
	public role_name: string;

	public convert(dto: any) {
		this.company_id = dto.company_id;
		this.default_address_id = dto.default_address_id;
		this.email = dto.email;
		this.fullname = dto.fullname;
		this.profile_picture_url = dto.profile_picture_url;
		this.role_name = dto.role_name;

		return this;
	}
}
