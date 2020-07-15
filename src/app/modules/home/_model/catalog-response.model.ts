import { CatalogDataRespModel } from './catalog-data-response.model';

export class CatalogRespModel {
	public data: CatalogDataRespModel[];
	public page: Number;
	public totalPage: Number;
	public totalData: Number;

	public convert(dto: any) {
		this.data = dto.data ? this.convertData(dto.data) : [];
		return this;
	}

	public convertData(dto: any[]) {
		const sum = dto.reduce((result, each) => {
			result.push(new CatalogDataRespModel().convert(each));
			return result;
		}, []);

		return sum;
	}
}
