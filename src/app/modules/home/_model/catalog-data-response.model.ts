export class CatalogDataRespModel {
	public name: string;
	public price: Number;
	public image: Number;
	public stock: Number;

	public convert(dto: any) {
		this.name = dto.name;
		this.price = dto.price;
		this.image = dto.image;
		this.stock = dto.stock;
		return this;
	}
}
