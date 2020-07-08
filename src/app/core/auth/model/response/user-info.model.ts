export class UserInfoModel {
	public email: string;
	public username: string;
	public roleName: string;
	public status: string;

	public convert(dto: any) {
		if (dto) {
			this.email = dto.email;
			this.username = dto.username;
			this.roleName = dto.role_name;
			this.status = dto.status;

			return this;
		} else {
			console.error('UserInfo: Cannot Mapping Empty Data!');

			return this;
		}
	}
}
