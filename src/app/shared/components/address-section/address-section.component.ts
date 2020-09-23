import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogAddressSectionComponent } from '../dialog-address-section/dialog-address-section.component';



@Component({
	selector: 'address-section',
	templateUrl: './address-section.component.html',
	styleUrls: ['./address-section.component.scss']
})
export class AddressSectionComponent implements OnInit {
	@Input() wide: number;
	@Input() margin: number;
	@Input() pl: number;
	@Input() borderRadius: number;

	hlmn_ini;
	divnya;
	location;

	constructor(public dialog: MatDialog,
		private router: Router) { }

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
		const modalDialog = this.dialog.open(DialogAddressSectionComponent, dialogConfig);


	}



	ngOnInit(): void {
		// if (this.router.url == '/pilih-produk') {
		// 	this.divnya = 'location-user-pendek';
		// } else {
		// 	this.divnya = 'location-user-panjang';
		// }
		this.divnya = 'location-user';
		this.location = 'Graha Boulevard, Jl. Boulevard Raya, RW.1, Kelapa Gading Timur...';

		this.stylesObj = { width: this.wide, margin: this.margin, paddingLeft: this.pl, borderRadius: this.borderRadius };
	}

}
