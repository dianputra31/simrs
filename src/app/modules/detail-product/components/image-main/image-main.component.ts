import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
//import { DialogAddressSectionComponent } from '../dialog-address-section/dialog-address-section.component';

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

	openDialogLocation() {

		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = "modal-component";
		dialogConfig.height = "auto";
		dialogConfig.width = "680px";
		dialogConfig.panelClass = "border-radius:20px";
		dialogConfig.data = {
			'searchId': 'hello'
		}
		//const modalDialog = this.dialog.open(DialogAddressSectionComponent, dialogConfig);


	}

	ngOnInit(): void {

		this.stylesObj = { width: this.wide, margin: this.margin, paddingLeft: this.pl, borderRadius: this.borderRadius };
	}

	changeImageMain($event) {
		console.log($event)
		this.imageMainSelected = $event;
	}
}
