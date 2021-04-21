// To parse this data:
//
//   import { Convert, CheckoutCartParams } from "./file";
//
//   const checkoutCartParams = Convert.toCheckoutCartParams(json);

export class CheckoutCartParams {
	cart_list?: CartListParams[];

}

export class ApproveCartParams {
	cart_list?: CartListApproveParams[];
	message?: String;
}

export class CartListParams {
	product_id?: number;
	quantity?: number;
}

export class CartListApproveParams {
	cart_request_id?: number;
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

export class ConvertApproveParams {
	public static toApproveCartParams(json: string): ApproveCartParams {
		return JSON.parse(json);
	}

	public static approveCartParamsToJson(value: ApproveCartParams): string {
		return JSON.stringify(value);
	}
}