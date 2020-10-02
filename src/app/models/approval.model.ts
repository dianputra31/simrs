// To parse this data:
//
//   import { Convert, Approval } from "./file";
//
//   const approval = Convert.toApproval(json);

export class Approval {
	status?: Status;
	data?: Product[];
}

export interface Product {
	id?: number;
	user_id?: number;
	product_id?: number;
	delivery_address_id?: number;
	quantity?: number;
	approval_status?: string;
	submitted_at?: Date;
	request_group_id?: number;
	action_code?: string;
	action_by?: number;
	action_at?: Date;
	product_name?: string;
	product_image?: string;
	product_sku?: string;
	partner_sku?: string;
	partner_sku_item?: string;
	category?: string;
	subcategory?: string;
	original_price?: number;
	sell_price?: number;
	discount_percentage?: number;
	supplier_name?: string;
	requester_fullname?: string;
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

	public static approvalToJson(value: Approval): string {
		return JSON.stringify(value);
	}
}