// To parse this data:
//
//   import { Convert, CartList } from "./file";
//
//   const cartList = Convert.toCartList(json);

import { QuantityModel } from './quantity.model';

export class CartList {
	status?: Status;
	data?: Data;
}

export interface Data {
	cart_list?: CartListElement[];
	total_price?: number;
	total_item?: number;
}

export class CartListElement {
	product_id?: number;
	partner_sku_item?: string;
	product_image?: string;
	product_name?: string;
	stock?: number;
	sell_price?: number;
	quantity?: number;
	shipping_cost?: number;
	availability?: string;
	updated_at?: Date;
	product_color?: String;
	product_size?: String;
	purchase_amount?: number;
	admin_fee?: number;
	sub_total?: number;
	ppn?: number;
	pph?: number;
	grand_total?: number;
	outOfStock: Boolean = false;
	selected: Boolean = true;
	qtyObject: QuantityModel;
}

export interface Status {
	msg?: string;
	rc?: number;
}

// Converts JSON strings to/from your types
export class Convert {
	public static toCartList(json: string): CartList {
		return JSON.parse(json);
	}

	public static cartListToJson(value: CartList): string {
		return JSON.stringify(value);
	}
}
