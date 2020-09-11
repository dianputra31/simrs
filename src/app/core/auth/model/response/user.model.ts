import { UserInfoModel } from './user-info.model';
// import { UserUACModel } from './user-uac.model';

export class UserModel {
	// public uac: UserUACModel;
	public info: UserInfoModel;
	public accessToken: string;
	email: any;
	role_name: any;
	fullname: any;

	public convert(dto, a) {
		if (a === 'token') {
			if (dto) {
				// this.uac = new UserUACModel().convert(dto.uac);

				this.accessToken = dto.access_token;

				return this;
			} else {
				console.error('UserModel: Cannot Mapping Empty Data!');

				return this;
			}
		} else {
			if (dto) {
				this.info = new UserInfoModel().convert(dto);
				return this;
			} else {
				console.error('UserModel: Cannot Mapping Empty Data Profile!');

				return this;
			}
		}
	}
}
