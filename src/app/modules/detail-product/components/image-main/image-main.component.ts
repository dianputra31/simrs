import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogPopupImageComponent } from '../../../../shared/components/dialog-popup-image/dialog-popup-image.component';

@Component({
	selector: 'image-main',
	templateUrl: './image-main.component.html',
	styleUrls: ['./image-main.component.scss'],
})
export class ImageMainComponent implements OnInit {
	@Input() wide: number;
	@Input() margin: number;
	@Input() pl: number;
	@Input() borderRadius: number;



	imageMainSelected = 'https://s2.bukalapak.com/img/24267287201/large/Cottonology_Wells_Black.jpg';

	constructor(public dialog: MatDialog) { }

	stylesObj = {};

	openDialogImage(imageMainSelected) {
		this.imageMainSelected = imageMainSelected
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = "modal-component";
		dialogConfig.height = "auto";
		dialogConfig.width = "350px";
		//dialogConfig.panelClass = "border-radius:0px";
		dialogConfig.data = {
			'images': ['https://s2.bukalapak.com/img/24267287201/large/Cottonology_Wells_Black.jpg', 'https://s4.bukalapak.com/img/42609287201/large/Cottonology_Wells_Black.jpg', 'https://s3.bukalapak.com/img/81978287201/large/Cottonology_Wells_Black.jpg', 'https://s1.bukalapak.com/img/63918119411/large/Cottonology_Wells_Black.jpg'],
			'imageMainSelected': this.imageMainSelected,
		}
		const modalDialog = this.dialog.open(DialogPopupImageComponent, dialogConfig);


	}

	ngOnInit(): void {

		this.stylesObj = { width: this.wide, margin: this.margin, paddingLeft: this.pl, borderRadius: this.borderRadius };
	}

	changeImageMain($event) {
		//console.log($event)
		this.imageMainSelected = $event;
	}
}
