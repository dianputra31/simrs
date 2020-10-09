import { CartListItemModel } from './cart-list-item.model';

export class CartListResponseModel {
	public cart_list: CartListItemModel;
	public total_price: number;
	public total_item: number;

	public convert(dto: any) {
		this.cart_list = dto.cart_list.reduce((result, each) => {
			result.push(new CartListItemModel().convert(each));
			return result;
		}, []);
		this.total_price = dto.total_price;
		this.total_item = dto.total_item;
		return this;
	}
}
