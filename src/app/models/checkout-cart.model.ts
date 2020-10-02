// To parse this data:
//
//   import { Convert, CheckoutCart } from "./file";
//
//   const checkoutCart = Convert.toCheckoutCart(json);

export class CheckoutCart {
	status?: Status;
	data?: Data;
}

export interface Data {
	products?: Product[];
	summary?: Summary;
}

export interface Product {
	user_id?: number;
	product_id?: number;
	quantity?: number;
	shipping_cost?: number;
	updated_at?: Date;
	product_name?: string;
	product_sku?: string;
	partner_sku?: string;
	partner_sku_item?: string;
	stock?: number;
	sell_price?: number;
	product_image?: string;
	subcategory_id?: number;
	product_color?: null;
	product_size?: null;
	supplier_name?: string;
	status?: string;
	purchase_amount?: number;
	admin_fee?: number;
	sub_total?: number;
	ppn?: number;
	pph?: number;
	grand_total?: number;
}

export interface Summary {
	purchase_amount?: number;
	admin_fee?: number;
	sub_total?: number;
	ppn?: number;
	pph?: number;
	grand_total?: number;
	shipping_cost?: number;
}

export interface Status {
	msg?: string;
	rc?: number;
}

// Converts JSON strings to/from your types
export class ConvertCheckoutCart {
	public static toCheckoutCart(json: string): CheckoutCart {
		return JSON.parse(json);
	}

	public static checkoutCartToJson(value: any): string {
		return JSON.stringify(value);
	}
}
