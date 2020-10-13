export class StatusHistoryModel {
	public status: string;
	public updated_at: string;
	public user_name: string;

	public convert(dto: any) {
		this.status = dto.status;
		this.updated_at = dto.updated_at;
		this.user_name = dto.user_name;
		return this;
	}
}
