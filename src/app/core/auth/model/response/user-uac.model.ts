export class UserUACModel {
	public transactionCreate: boolean;
	public transactionRead: boolean;
	public transactionEdit: boolean;
	public transactionDelete: boolean;
	public transactionExport: boolean;
	public transactionApproval: boolean;

	public convert(dto: any) {
		if (dto) {
			this.transactionCreate = dto.TRANSACTION_CREATE;
			this.transactionRead = dto.TRANSACTION_READ;
			this.transactionEdit = dto.TRANSACTION_EDIT;
			this.transactionDelete = dto.TRANSACTION_DELETE;
			this.transactionExport = dto.TRANSACTION_EXPORT;
			this.transactionApproval = dto.TRANSACTION_APPROVAL;

			return this;
		} else {
			console.error('UserUAC: Cannot Mapping Empty Data!');

			return this;
		}
	}
}
