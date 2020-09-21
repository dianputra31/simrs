import { CompanyObjectModel } from './company-object.model';
import { DeliveryAddressObjectModel } from './delivery-address-object.model';
import { ProfileObjectModel } from './profile-object.model';
export class ProfileResponseModel {
	public profile: ProfileObjectModel;
	public company: CompanyObjectModel;
	public delivery_address: DeliveryAddressObjectModel[];

	public convert(dto: any) {
		this.profile = new ProfileObjectModel().convert(dto.profile);
		this.company = new CompanyObjectModel().convert(dto.company);
		this.delivery_address = this.convertDeliveryAddress(
			dto.delivery_address
		);

		return this;
	}

	public convertDeliveryAddress(dto: any[]) {
		const sum = dto.reduce((result, each) => {
			result.push(new DeliveryAddressObjectModel().convert(each));
			return result;
		}, []);
		return sum;
	}
}
