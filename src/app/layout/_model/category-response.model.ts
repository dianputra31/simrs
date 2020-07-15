import { SubcategoryRespModel } from './subcategory-response.model';

export class CategoryRespModel {
	public name: string;
	public subcategory: SubcategoryRespModel[];

	public convert(dto: any) {
		this.name = dto.name;
		this.subcategory = dto.subcategory
			? this.convertSubcategory(dto.subcategory)
			: [];
		return this;
	}

	public convertSubcategory(dto: any[]) {
		const sum = dto.reduce((result, each) => {
			result.push(new SubcategoryRespModel().convert(each));

			return result;
		}, []);

		return sum;
	}
}
