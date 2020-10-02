import { SelectedCartItemModel } from './selected-cart-item.model';

export class SelectedCartItemRequestModel {
	public cart_list: SelectedCartItemModel[];
	public message: string;

	public convert() {
		return {
			message: this.message,
			cart_list: this.cart_list.reduce((result, each) => {
				result.push(each.convert())
				return result
			}, [])
		};
	}
}