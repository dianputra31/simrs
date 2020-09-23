export class ProductTopSubcategoryResponseModel {
	public id: number;
	public parent_id: number;
	public category_name: String;
	public category_description: String;

	public convert(dto: any) {
		this.id = dto.id;
		this.parent_id = dto.parent_id;
		this.category_name = dto.category_name;
		this.category_description = dto.category_description;
		return this;
	}
}
