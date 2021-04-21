import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'image',
	templateUrl: './image.component.html',
	styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
	@Input() width: string;
	@Input() height: string;
	@Input() localsrc: string;
	@Input() serversrc: string;
	@Input() cursor: string = 'default';

	@Input() development = false;
	imageLoader = true;
	constructor() {}

	docs = `
	<image 
		localsrc='logo.png' 
		serversrc='url'
		width='50px'></image>`;

	themeDocs = `
	localsrc => ambil gambar dari lokal asset, dari folder asset!
	serversrc => ambil gambar dari server, pass in URL
	pilih salah satu (localsrc atau serversrc)!!!!!!

	width => please specify width nya aja karena height nya sudah di scale down sesuai ration lebar dan tinggi gambar
	
	`;

	ngOnInit() {}

	onImgError(event) {
		event.target.src = '../../../../assets/nestloading.gif';
	}

	getSrc() {
		if (this.localsrc) {
			return '../../../../assets/' + this.localsrc;
		} else if (this.serversrc) {
			return this.serversrc;
		}
	}
}
