import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'trash-can-dialog',
	templateUrl: './trash-can-dialog.component.html',
	styleUrls: ['./trash-can-dialog.component.scss'],
})
export class TrashCanDialogComponent implements OnInit {
	address;
	constructor(
		public dialogRef: MatDialogRef<TrashCanDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.address = data.address;
	}

	ngOnInit(): void {
		this.getData();
	}
	getData() {
		console.log(this.data);
	}
	hapusPerusahaan(e) {
		console.log(e);
		this.dialogRef.close('hapus');
	}
	batal() {
		this.dialogRef.close();
	}
}
