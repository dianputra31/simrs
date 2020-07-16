import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogAddressSectionComponent } from '../dialog-address-section/dialog-address-section.component';



@Component({
	selector: 'address-section',
	templateUrl: './address-section.component.html',
	styleUrls: ['./address-section.component.scss']
})
export class AddressSectionComponent implements OnInit {
	hlmn_ini;
	divnya;

	constructor(public dialog: MatDialog,
		private router: Router) { }

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
		if (this.router.url == '/pilih-produk') {
			this.divnya = 'location-user-pendek';
		} else {
			this.divnya = 'location-user-panjang';
		}
	}

}
