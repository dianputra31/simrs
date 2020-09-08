export class CatalogSubcategoryModel {
	public id: Number;
	public parent_id: Number;
	public category_name: String;
	public category_description: String;
	public icon: String;
	public image: String;

	public convert(dto: any) {
		this.id = dto.id;
		this.parent_id = dto.parent_id;
		this.category_name = dto.category_name;
		this.category_description = dto.category_description;
		this.icon = dto.icon;
		this.image = dto.image;
		return this;
	}
}
