import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'image-grid',
	templateUrl: './image-grid.component.html',
	styleUrls: ['./image-grid.component.scss']
})
export class ImageGridComponent implements OnInit {
	imageSelections = ['https://s2.bukalapak.com/img/24267287201/small/Cottonology_Wells_Black.jpg', 'https://s4.bukalapak.com/img/42609287201/small/Cottonology_Wells_Black.jpg', 'https://s3.bukalapak.com/img/81978287201/small/Cottonology_Wells_Black.jpg', 'https://s1.bukalapak.com/img/63918119411/small/Cottonology_Wells_Black.jpg'];
	selectedImages = 'https://s2.bukalapak.com/img/24267287201/small/Cottonology_Wells_Black.jpg';
	constructor() { }

	ngOnInit(): void {
	}

}
