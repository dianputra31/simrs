// To parse this data:
//
//   import { Convert, Approval } from "./file";
//
//   const approval = Convert.toApproval(json);

export class Approval {
	status?: Status;
	data?: Product[];
}

export class Product {
	id?: number;
	user_id?: number;
	product_id?: number;
	delivery_address_id?: number;
	quantity?: number;
	approval_status?: string;
	submitted_at?: Date;
	request_group_id?: number;
	updated_at?: Date;
	purchase_amount?: number;
	admin_fee?: number;
	ppn?: number;
	pph?: number;
	shipping_cost?: number;
	sub_total?: number;
	grand_total?: number;
	product_name?: string;
	product_image?: string;
	product_sku?: string;
	partner_sku?: string;
	partner_sku_item?: string;
	category?: string;
	subcategory?: string;
	original_price?: number;
	sell_price?: number;
	availability?: string;
	discount_percentage?: number;
	supplier_name?: string;
	requester_fullname?: string;
	action_code?: number;
	action_by?: number;
	action_at?: Date;
	available?: Boolean = true;
	cart?: Boolean = true;
}

export interface Status {
	msg?: string;
	rc?: number;
}

// Converts JSON strings to/from your types
export class ConvertApproval {
	public static toApproval(json: string): Approval {
		return JSON.parse(json);
	}

	public static approvalToJson(value: any): string {
		return JSON.stringify(value);
	}
}