export class CartListItemModel {
	public product_id: number;
	public partner_sku_item: string;
	public product_image: string;
	public product_name: string;
	public sell_price: number;
	public quantity: number;
	public shipping_cost: number;
	public availability: string;
	public updated_at: string;
	public purchase_amount: number;
	public admin_fee: number;
	public sub_total: number;
	public ppn: number;
	public pph: number;
	public grand_total: number;
	public selected: boolean;
	public stock: number;
	public product_color: string;
	public product_size: string;
	public enableSelection: boolean;
	public supplier_name: string;
	public submitted_at: string;

	public convert(dto: any) {
		this.product_id = dto.product_id;
		this.partner_sku_item = dto.partner_sku_item;
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
		this.stock = dto.stock;
		this.product_color = dto.product_color;
		this.product_size = dto.product_size;
		this.selected = this.select();
		this.enableSelection = this.enableSelect();
		this.supplier_name = dto.supplier_name;
		this.submitted_at = dto.submitted_at;
		return this;
	}

	public select() {
		if (this.availability == 'AVAILABLE') {
			return true;
		} else {
			return false;
		}
	}

	public enableSelect() {
		if (this.availability == 'AVAILABLE') {
			return true;
		} else {
			return false;
		}
	}
}
