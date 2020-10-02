export class SelectedCartItemModel {
	public cart_request_id: number;

	public convert() {
		return {
			cart_request_id: this.cart_request_id,
		};
	}
}