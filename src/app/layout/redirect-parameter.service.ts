import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class RedirectParameterService {
	namaproduk = "";
	nApproval = 0;
	nCart = 0;
	nTransaction = 0;
	price_start = 0;
	price_end = 0;
	limit = 50;
	selectedbutton_transaksi = "ALL";
	selectedbutton_name = "";

	constructor() {
	}
}
