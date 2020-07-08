import { UserInfoModel } from './user-info.model';
import { UserUACModel } from './user-uac.model';

export class UserModel {
	public uac: UserUACModel;
	public info: UserInfoModel;
	public accessToken: string;

	public convert(dto) {
		if (dto) {
			this.uac = new UserUACModel().convert(dto.uac);
			this.info = new UserInfoModel().convert(dto.info);
			this.accessToken = dto.access_token;

			return this;
		} else {
			console.error('UserModel: Cannot Mapping Empty Data!');

			return this;
		}
	}
}
