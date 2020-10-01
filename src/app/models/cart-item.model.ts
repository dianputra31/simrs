export class CartItemModel {
	// public cart_list: CartItemModel[];
	public product_id: number;
	public quantity: number;

	public convert() {
		return {
			// cart_list: this.cart_list,
			product_id: this.product_id,
			quantity: this.quantity
		};
	}
}