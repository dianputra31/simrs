import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
	selector: 'item-telah-dihapus',
	templateUrl: './item-telah-dihapus.component.html',
	styleUrls: ['./item-telah-dihapus.component.scss'],
})
export class ItemTelahDihapusComponent implements OnInit {
	show = false;
	constructor() {}

	ngOnInit() {}

	showNotif() {
		this.show = true;

		const numbers = interval(1000);
		const a = numbers.pipe(take(4));
		a.subscribe((x) => {
			if (x == 3) {
				console.log(this.show);
				this.show = false;
			}
		});
	}
}
