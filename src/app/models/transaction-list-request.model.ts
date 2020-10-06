export class TransactionListRequestModel {
	public status_code: string;
	public status_name: string;
	public address_id: number;
	public user_id: number;
	public keyword: string;
	public start_date: string;
	public end_date: string;
	public page: number;
	public limit: number;

	public convert() {
		return {
			status_code: this.status_code,
			status_name: this.status_name,
			address_id: this.address_id,
			user_id: this.user_id,
			keyword: this.keyword,
			start_date: this.start_date,
			end_date: this.end_date,
			page: this.page,
			limit: this.limit,
		};
	}
}
