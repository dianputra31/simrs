import { CategoryRespModel } from './category-response.model';

export class CatalogRespModel {
	public category: CategoryRespModel[];

	public convert(dto: any) {
		this.category = dto.category ? this.convertCategory(dto.category) : [];
		return this;
	}

	public convertCategory(dto: any[]) {
		const sum = dto.reduce((result, each) => {
			result.push(new CategoryRespModel().convert(each));

			return result;
		}, []);

		return sum;
	}
}
