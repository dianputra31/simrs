export class DeliveryAddressJsonModel {
	public id: number;
	public company_id: number;
	public address_name: string;
	public recipient_name: string;
	public recipient_contact: string;
	public province: string;
	public district: string;
	public subdistrict: string;
	public village: string;
	public zipcode: string;
	public address_detail: string;
	public set_as_default: number;
	public latitude: string;
	public longitude: string;

	public convert(dto: any) {
		this.id = dto.id;
		this.company_id = dto.company_id;
		this.address_name = dto.address_name;
		this.recipient_name = dto.recipient_name;
		this.recipient_contact = dto.recipient_contact;
		this.province = dto.province;
		this.district = dto.district;
		this.subdistrict = dto.subdistrict;
		this.village = dto.village;
		this.zipcode = dto.zipcode;
		this.address_detail = dto.address_detail;
		this.set_as_default = dto.set_as_default;
		this.latitude = dto.latitude;
		this.longitude = dto.longitude;
		return this;
	}
}
