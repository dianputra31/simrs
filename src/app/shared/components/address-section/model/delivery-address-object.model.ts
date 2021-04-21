export class DeliveryAddressObjectModel {
	public address_detail: string;
	public address_name: string;
	public district: string;
	public is_head_office: number;
	public latitude: string;
	public longitude: string;
	public province: string;
	public recipient_contact: string;
	public recipient_name: string;
	public subdistrict: string;
	public village: string;
	public zipcode: string;
	public id: number;
	public delivery_message: string;

	public convert(dto: any) {
		this.id = dto.id;
		this.address_detail = dto.address_detail;
		this.address_name = dto.address_name;
		this.district = dto.district;
		this.is_head_office = dto.is_head_office;
		this.latitude = dto.latitude;
		this.longitude = dto.longitude;
		this.province = dto.province;
		this.recipient_contact = dto.recipient_contact;
		this.recipient_name = dto.recipient_name;
		this.subdistrict = dto.subdistrict;
		this.village = dto.village;
		this.zipcode = dto.zipcode;
		this.id = dto.id;
		this.delivery_message = dto.delivery_message;

		return this;
	}
}
