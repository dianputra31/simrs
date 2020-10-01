export class CartItemResponseModel {
	public msg: string;
	public rc: number;

	public convert(dto: any) {
		this.msg = dto.msg;
		this.rc = dto.rc;
		return this;
	}
}