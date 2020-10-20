export class ProductDetailResponseModel {
	public id: number;
	public category_id: number;
	public category: string;
	public subcategory_id: number;
	public subcategory: string;
	public supplier_id: number;
	public supplier_name: string;
	public product_code: string;
	public product_sku: string;
	public partner_sku: string;
	public partner_sku_item: string;
	public original_price: number;
	public sell_price: number;
	public product_name: string;
	public product_name_item: string;
	public product_description: string;
	public product_url: string;
	public brand_name: string;
	public brand_image: string;
	public thumbnail: string;
	public product_image: string;
	public merchant_code: string;
	public merchant_name: string;
	public product_type: string;
	public stock: string;
	public product_color: string;
	public product_size: string;
	public discount_percentage: number;

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
		this.product_type = dto.product_type;
		this.stock = dto.stock;
		this.product_color = dto.product_color;
		this.product_size = dto.product_size;
		this.discount_percentage = dto.discount_percentage;

		return this;
	}
}
