import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class RedirectParameterService {
	namaproduk = "";
	price_start = 0;
	price_end = 0;
	limit = 50;

	constructor() {
	}
}
