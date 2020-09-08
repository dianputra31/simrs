import { CatalogSubcategoryModel } from './catalog-subcategory.model';
export class CatalogCategoryModel {
	public id: Number;
	public parent_id: Number;
	public category_name: Number;
	public category_descriptions: Number;
	public icon: string;
	public image: Number;
	public subcategories: CatalogSubcategoryModel[];

	public convert(dto: any) {
		this.id = dto.id;
		this.parent_id = dto.parent_id;
		this.category_name = dto.category_name;
		this.category_descriptions = dto.category_descriptions;
		this.icon = dto.icon;
		this.image = dto.image;

		this.subcategories = dto.subcategories
			? this.convertSubcategory(dto.subcategories)
			: [];
		return this;
	}

	public convertSubcategory(dto: any[]) {
		const sum = dto.reduce((result, each) => {
			result.push(new CatalogSubcategoryModel().convert(each));
			return result;
		}, []);

		return sum;
	}
}
