export class CompanyObjectModel {
	public trade_name: string;
	public credit_rp: number;
	public convert(dto: any) {
		this.trade_name = dto.trade_name;
		this.credit_rp = dto.credit_rp;

		return this;
	}
}
