export class SetDefaultAddressReq {
	public address_id: string;

	public convert() {
		return {
			address_id: this.address_id
		};
	}
}