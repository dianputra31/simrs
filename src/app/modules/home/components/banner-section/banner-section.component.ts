import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { throwError } from 'rxjs';

export interface PhotosApi {
	albumId?: number;
	id?: number;
	title?: string;
	url?: string;
	thumbnailUrl?: string;
}

@Component({
	selector: 'banner-section',
	templateUrl: './banner-section.component.html',
	styleUrls: ['./banner-section.component.scss'],
})
export class BannerSectionComponent implements OnInit {
	apiData: PhotosApi;
	limit: number = 2;
	number = 590; // <==== Edit this number to limit API results
	customOptions: OwlOptions = {
		loop: true,
		autoplay: true,
		center: true,
		dots: false,
		autoHeight: true,
		autoWidth: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	};

	constructor(private readonly http: HttpClient) {}

	ngOnInit() {
		this.fetch();
	}

	fetch() {
		const api = `https://jsonplaceholder.typicode.com/albums/1/photos?_start=0&_limit=${this.limit}`;
		const http$ = this.http.get<PhotosApi>(api);

		http$.subscribe(
			(res) => (this.apiData = res),
			(err) => throwError(err)
		);
	}
}
