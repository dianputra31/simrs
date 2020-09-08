export class UserInfoModel {
	public email: string;
	public username: string;
	public roleName: string;
	public company_id: string;

	public convert(dto: any) {
		if (dto) {
			this.email = dto.email;
			this.username = dto.fullname;
			this.roleName = dto.role_name;
			this.company_id = dto.company_id;

			return this;
		} else {
			console.error('UserInfo: Cannot Mapping Empty Data!');

			return this;
		}
	}
}
