export class SubcategoryRespModel {
	public name: string;

	public convert(dto: any) {
		this.name = dto.name;
		return this;
	}
}
