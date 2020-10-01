// To parse this data:
//
//   import { Convert, CartList } from "./file";
//
//   const cartList = Convert.toCartList(json);


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
	product_image?: string;
	product_name?: string;
	sell_price?: number;
	quantity?: number;
	shipping_cost?: number;
	availability?: string;
	updated_at?: Date;
	purchase_amount?: number;
	admin_fee?: number;
	sub_total?: number;
	ppn?: number;
	pph?: number;
	grand_total?: number;
	outOfStock: Boolean = false;
	selected: Boolean = true;
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

	public static cartListToJson(value: any): string {
		return JSON.stringify(value);
	}
}
