// To parse this data:
//
//   import { Convert, Address } from "./file";
//
//   const address = Convert.toAddress(json);

export class Address {
	status?: Status;
	data?: AddressELement[];
}

export class AddressELement {
	address_id?: number;
	address_name?: string;
	request_total?: number;
}

export interface Status {
	msg?: string;
	rc?: number;
}

// Converts JSON strings to/from your types
export class ConvertAddress {
	public static toAddress(json: string): Address {
		return JSON.parse(json);
	}

	public static addressToJson(value: any): string {
		return JSON.stringify(value);
	}
}
