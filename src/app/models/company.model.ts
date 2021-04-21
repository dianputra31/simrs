// To parse this data:
//
//   import { Convert, Company } from "./file";
//
//   const company = Convert.toCompany(json);

export class Company {
	trade_name?: string;
	credit_rp?: number;
	credit_limit?: number;
	fee_percentage?: number;
	ppn_percentage?: number;
	pph_percentage?: number;
}

// Converts JSON strings to/from your types
export class ConvertCompany {
	public static toCompany(json: string): Company {
		return JSON.parse(json);
	}

	public static companyToJson(value: Company): string {
		return JSON.stringify(value);
	}
}
