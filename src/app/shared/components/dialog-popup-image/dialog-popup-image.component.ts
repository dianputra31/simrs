import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
	selector: 'dialog-popup-image',
	templateUrl: './dialog-popup-image.component.html',
	styleUrls: ['./dialog-popup-image.component.scss']
})
export class DialogPopupImageComponent implements OnInit {

	imageMainSelected = '';
	images = [];
	index = 0;
	i = 0;

	constructor(private dialogRef: MatDialogRef<DialogPopupImageComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
		this.imageMainSelected = data.imageMainSelected;
		this.images.push(data.images)
	}

	ngOnInit(): void {
	}

	eventNav(action, imageMainSelected) {
		this.index = this.images[0].indexOf(imageMainSelected);
		var i = this.index;
		if (action == 'next') {
			i = i + 1;
			i = i % this.images[0].length;
			this.imageMainSelected = this.images[0][i];
		}
		else {
			if (i === 0) {
				i = this.images[0].length;
			}
			i = i - 1;
			this.imageMainSelected = this.images[0][i];
		}
	}


}
