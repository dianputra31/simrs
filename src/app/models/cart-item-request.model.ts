import { CartItemModel } from './cart-item.model';

export class CartItemRequestModel {
	public cart_list: CartItemModel[];
	// public product_id: number;
	// public quantity: number;

	public convert() {
		return {
			cart_list: this.cart_list.reduce((result, each) => {
				result.push(each.convert())
				return result
			}, [])
			// product_id: this.product_id,
			// quantity: this.quantity
		};
	}
}