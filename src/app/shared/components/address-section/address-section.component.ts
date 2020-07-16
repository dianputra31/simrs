import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogAddressSectionComponent } from '../dialog-address-section/dialog-address-section.component';


@Component({
	selector: 'address-section',
	templateUrl: './address-section.component.html',
	styleUrls: ['./address-section.component.scss']
})
export class AddressSectionComponent implements OnInit {

	constructor(public dialog: MatDialog) { }

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
		const modalDialog = this.dialog.open(DialogAddressSectionComponent, dialogConfig);


	}

	ngOnInit(): void {
	}

}
