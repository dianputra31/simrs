export class CartListItemModel {
	public product_id: number;
	public product_image: string;
	public product_name: string;
	public sell_price: number;
	public quantity: number;
	public shipping_cost: number;
	public availability: number;
	public updated_at: string;
	public purchase_amount: number;
	public admin_fee: number;
	public sub_total: number;
	public ppn: number;
	public pph: number;
	public grand_total: number;
	public selected: boolean;

	public convert(dto: any) {
		console.log(dto);
		this.product_id = dto.product_id;
		this.product_image = dto.product_image;
		this.product_name = dto.product_name;
		this.sell_price = dto.sell_price;
		this.quantity = dto.quantity;
		this.shipping_cost = dto.shipping_cost;
		this.availability = dto.availability;
		this.updated_at = dto.updated_at;
		this.purchase_amount = dto.purchase_amount;
		this.admin_fee = dto.admin_fee;
		this.sub_total = dto.sub_total;
		this.ppn = dto.ppn;
		this.pph = dto.pph;
		this.grand_total = dto.grand_total;
		this.selected = true;

		return this;
	}
}
