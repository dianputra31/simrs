import { CatalogCategoryModel } from './catalog-category.model';

export class CatalogRespModel {
	public category: CatalogCategoryModel[];

	public convert(dto: any) {
		this.category = dto.category ? this.convertData(dto.category) : [];
		return this;
	}

	public convertData(dto: any[]) {
		const sum = dto.reduce((result, each) => {
			result.push(new CatalogCategoryModel().convert(each));
			return result;
		}, []);

		return sum;
	}
}
