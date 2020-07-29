import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
	selector: 'dialog-popup-image',
	templateUrl: './dialog-popup-image.component.html',
	styleUrls: ['./dialog-popup-image.component.scss']
})
export class DialogPopupImageComponent implements OnInit {

	imageMainSelected = '';

	constructor(private dialogRef: MatDialogRef<DialogPopupImageComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
		this.imageMainSelected = data.imageMainSelected;
	}

	ngOnInit(): void {
	}

}
