// To parse this data:
//
//   import { Convert, CheckoutCartParams } from "./file";
//
//   const checkoutCartParams = Convert.toCheckoutCartParams(json);

export class CheckoutCartParams {
	cart_list?: CartListParams[];
}

export class CartListParams {
	product_id?: number;
	quantity?: number;
}

// Converts JSON strings to/from your types
export class ConvertCheckoutParams {
	public static toCheckoutCartParams(json: string): CheckoutCartParams {
		return JSON.parse(json);
	}

	public static checkoutCartParamsToJson(value: CheckoutCartParams): string {
		return JSON.stringify(value);
	}
}