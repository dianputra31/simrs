import { DeliveryAddressJsonModel } from './delivery-address-json.model';
import { StatusHistoryModel } from './status-history.model';
export class TransactionDetailModel {
	public admin_fee: number;
	public approval_message: string;
	public approved_at: string;
	public approver_email: string;
	public approver_full_name: string;
	public approver_user_id: string;
	public availability: string;
	public comment_rate: string;
	public company_id: number;
	public company_name: string;
	public company_type: string;
	public delivery_address_id: number;
	public delivery_address_json: DeliveryAddressJsonModel;
	public fee_percentage: number;
	public grand_total: number;
	public hidden_insurance: string;
	public id: number;
	public initial_quantity: number;
	public invoice_no: number;
	public invoice_status: string;
	public invoice_summary_id: number;
	public item_status_history: StatusHistoryModel[];
	public max_days: number;
	public message: string;
	public min_days: number;
	public order_code: string;
	public original_price: number;

	public partner_sku: string;
	public partner_sku_item: string;
	public pph: number;
	public pph_percentage: number;
	public ppn: number;
	public ppn_percentage: number;
	public product_color: string;
	public product_id: number;
	public product_image: string;
	public product_name: string;
	public product_rate: string;
	public product_size: string;
	public product_sku: string;
	public purchase_amount: number;
	public purchased_status_history: StatusHistoryModel[];
	public quantity: number;
	public reason: string;
	public receipt_number: string;
	public received_at: string;
	public recieved_at: string;
	public recipient_name: string;
	public released_at: string;
	public request_group_id: number;
	public requested_at: string;
	public requester_email: string;
	public requester_full_name: string;
	public requester_user_id: number;

	public sell_price: number;
	public service_rate: number;
	public shipper: string;
	public shipping_cost: number;
	public status: string;
	public sub_total: number;
	public subcategory_id: number;
	public supplier_id: number;
	public supplier_name: string;
	public supplier_order_code: string;
	public supplier_order_item_code: number;
	public warehouse_city: string;
	public warehouse_name: string;

	public convert(dto: any) {
		this.admin_fee = dto.number;
		this.approval_message = dto.approval_message;
		this.approved_at = dto.approved_at;
		this.approver_email = dto.approver_email;
		this.approver_full_name = dto.approver_full_name;
		this.approver_user_id = dto.approver_user_id;
		this.availability = dto.availability;
		this.comment_rate = dto.comment_rate;
		this.company_id = dto.company_id;
		this.company_name = dto.company_name;
		this.company_type = dto.company_type;
		this.delivery_address_id = dto.delivery_address_id;
		this.delivery_address_json = new DeliveryAddressJsonModel().convert(
			dto.delivery_address_json
		);
		this.fee_percentage = dto.fee_percentage;
		this.grand_total = dto.grand_total;
		this.hidden_insurance = dto.hidden_insurance;
		this.id = dto.id;
		this.initial_quantity = dto.initial_quantity;
		this.invoice_no = dto.invoice_no;
		this.invoice_status = dto.invoice_status;
		this.invoice_summary_id = dto.invoice_summary_id;
		this.item_status_history = dto.item_status_history.reduce(
			(result, each) => {
				result.push(new StatusHistoryModel().convert(each));
				return result;
			},
			[]
		);
		this.max_days = dto.max_days;
		this.message = dto.message;
		this.min_days = dto.min_days;
		this.order_code = dto.order_code;
		this.original_price = dto.original_price;

		this.partner_sku = dto.partner_sku;
		this.partner_sku_item = dto.partner_sku_item;
		this.pph = dto.pph;
		this.pph_percentage = dto.pph_percentage;
		this.ppn = dto.ppn;
		this.ppn_percentage = dto.ppn_percentage;
		this.product_color = dto.product_color;
		this.product_id = dto.product_id;
		this.product_image = dto.product_image;
		this.product_name = dto.product_name;
		this.product_rate = dto.product_rate;
		this.product_size = dto.product_size;
		this.product_sku = dto.product_sku;
		this.purchase_amount = dto.purchase_amount;
		this.purchased_status_history = dto.purchased_status_history.reduce(
			(result, each) => {
				result.push(new StatusHistoryModel().convert(each));
				return result;
			},
			[]
		);
		this.quantity = dto.quantity;
		this.reason = dto.reason;
		this.receipt_number = dto.receipt_number;
		this.received_at = dto.received_at;
		this.recieved_at = dto.recieved_at;
		this.recipient_name = dto.recipient_name;
		this.released_at = dto.released_at;
		this.request_group_id = dto.request_group_id;
		this.requested_at = dto.requested_at;
		this.requester_email = dto.requester_email;
		this.requester_full_name = dto.requester_full_name;
		this.requester_user_id = dto.requester_user_id;

		this.sell_price = dto.sell_price;
		this.service_rate = dto.service_rate;
		this.shipper = dto.shipper;
		this.shipping_cost = dto.shipping_cost;
		this.status = dto.status;
		this.sub_total = dto.sub_total;
		this.subcategory_id = dto.subcategory_id;
		this.supplier_id = dto.supplier_id;
		this.supplier_name = dto.supplier_name;
		this.supplier_order_code = dto.supplier_order_code;
		this.supplier_order_item_code = dto.supplier_order_item_code;
		this.warehouse_city = dto.warehouse_city;
		this.warehouse_name = dto.warehouse_name;

		return this;
	}
}
