import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private router: Router
	) { }

	myControl = new FormControl();
	options: string[] = ['Ampelas Halus', 'Ampelas Kasar', 'Amplifier Jumbo',
		'Bawang Merah', 'Bawang Putih', 'Bolpoint',
		'Centong Super',
		'Sweater Merah Pria'];
	filteredOptions: Observable<string[]>;

	ngOnInit() {
		this.filteredOptions = this.myControl.valueChanges.pipe(
			startWith(''),
			//minimal 1 karakter
			map(value => value.length >= 1 ? this._filter(value) : [])
		);
	}

	private _filter(value: string): string[] {
		const filterValue = value.toLowerCase();
		return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
	}

	showKategoriPopup() {
		console.log('hello');
	}

	backToHome() {
		this.router.navigate(['./']);
	}


}
