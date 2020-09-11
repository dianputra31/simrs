export class CatalogResponseModel {
	public id: Number;
	public category_id: Number;
	public category: String;
	public subcategory_id: Number;
	public subcategory: String;
	public supplier_id: Number;
	public supplier_name: String;
	public product_code: String;
	public product_sku: String;
	public partner_sku: String;
	public partner_sku_item: String;
	public original_price: Number;
	public sell_price: number;
	public product_name: String;
	public product_name_item: String;
	public product_description: String;
	public product_url: String;
	public brand_name: String;
	public brand_image: String;
	public thumbnail: String;
	public product_image: String;
	public merchant_code: String;
	public merchant_name: String;

	public convert(dto: any) {
		this.id = dto.id;
		this.category_id = dto.category_id;
		this.category = dto.category;
		this.subcategory_id = dto.subcategory_id;
		this.subcategory = dto.subcategory;
		this.supplier_id = dto.supplier_id;
		this.supplier_name = dto.supplier_name;
		this.product_code = dto.product_code;
		this.product_sku = dto.product_sku;
		this.partner_sku = dto.partner_sku;
		this.partner_sku_item = dto.partner_sku_item;
		this.original_price = dto.original_price;
		this.sell_price = dto.sell_price;
		this.product_name = dto.product_name;
		this.product_name_item = dto.product_name_item;
		this.product_description = dto.product_description;
		this.product_url = dto.product_url;
		this.brand_name = dto.brand_name;
		this.brand_image = dto.brand_image;
		this.thumbnail = dto.thumbnail;
		this.product_image = dto.product_image;
		this.merchant_code = dto.merchant_code;
		this.merchant_name = dto.merchant_name;
		return this;
	}
}
