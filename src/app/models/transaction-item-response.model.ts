import { DeliveryAddressJsonModel } from './delivery-address-json.model';

export class TransactionItemResponseModel {
	public id: number;
	public purchased_id: number;
	public product_id: number;
	public category_id: number;
	public subcategory_id: number;
	public quantity: number;
	public product_name: string;
	public product_sku: string;
	public partner_sku: string;
	public partner_sku_item: string;
	public supplier_id: number;
	public supplier_name: string;
	public product_image: string;
	public original_price: number;
	public sell_price: number;
	public fee_percentage: number;
	public purchase_amount: number;
	public admin_fee: number;
	public sub_total: number;
	public ppn: number;
	public pph: number;
	public shipping_cost: number;
	public grand_total: number;
	public status: string;
	public approver_user_id: number;
	public approver_full_name: string;
	public requester_user_id: number;
	public requester_full_name: string;
	public approved_at: Date;
	public requested_at: Date;
	public delivery_address_id: number;
	public delivery_address_json: DeliveryAddressJsonModel;

	public convert(dto: any) {
		this.id = dto.id;
		this.purchased_id = dto.purchased_id;
		this.product_id = dto.product_id;
		this.category_id = dto.category_id;
		this.subcategory_id = dto.subcategory_id;
		this.quantity = dto.quantity;
		this.product_name = dto.product_name;
		this.product_sku = dto.product_sku;
		this.partner_sku = dto.partner_sku;
		this.partner_sku_item = dto.partner_sku_item;
		this.supplier_id = dto.supplier_id;
		this.supplier_name = dto.supplier_name;
		this.product_image = dto.product_image;
		this.original_price = dto.original_price;
		this.sell_price = dto.sell_price;
		this.fee_percentage = dto.fee_percentage;
		this.purchase_amount = dto.purchase_amount;
		this.admin_fee = dto.admin_fee;
		this.sub_total = dto.sub_total;
		this.ppn = dto.ppn;
		this.pph = dto.pph;
		this.shipping_cost = dto.shipping_cost;
		this.grand_total = dto.grand_total;
		this.status = dto.status;
		this.approver_user_id = dto.approver_user_id;
		this.approver_full_name = dto.approver_full_name;
		this.requester_user_id = dto.requester_user_id;
		this.requester_full_name = dto.requester_full_name;
		this.approved_at = dto.approved_at;
		this.requested_at = dto.requested_at;
		this.delivery_address_id = dto.delivery_address_id;
		this.delivery_address_json = new DeliveryAddressJsonModel().convert(
			dto.delivery_address_json
		);

		return this;
	}
}
