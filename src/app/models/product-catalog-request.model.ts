export class ProductCatalogRequestModel {
	public category_id: number;
	public sub_category_id: number;
	public keyword: string;
	public price_start: number;
	public price_end: number;
	public page: number;
	public limit: number;

	public convert() {
		return {
			category_id: this.category_id,
			sub_category_id: this.sub_category_id,
			keyword: this.keyword,
			price_start: this.price_start,
			price_end: this.price_end,
			page: this.page,
			limit: this.limit,
		};
	}

	public convertQueryParameter() {
		var x = '';
		if (this.category_id) {
			x += '/category_id=' + this.category_id;
		}
		return x;
	}
}
