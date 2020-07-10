import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogLocationSectionComponent } from '../dialog-location-section/dialog-location-section.component';


@Component({
	selector: 'app-location-section',
	templateUrl: './location-section.component.html',
	styleUrls: ['./location-section.component.scss']
})
export class LocationSectionComponent implements OnInit {

	constructor(public dialog: MatDialog) { }

	openDialogLocation() {
		// const dialogRef = this.dialog.open(DialogLocationSectionComponent);

		// dialogRef.afterClosed().subscribe(result => {
		// 	console.log(`Dialog result: ${result}`);
		// });

		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = "modal-component";
		dialogConfig.height = "313px";
		dialogConfig.width = "680px";
		dialogConfig.panelClass = "border-radius:20px";
		dialogConfig.data = {
			'searchId': 'hello'
		}
		const modalDialog = this.dialog.open(DialogLocationSectionComponent, dialogConfig);


	}

	ngOnInit() {
	}



}
