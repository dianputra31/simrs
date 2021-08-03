import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'hapus-dokter-luar-dialog',
  templateUrl: './hapus-dokter-luar-dialog.component.html',
  styleUrls: ['./hapus-dokter-luar-dialog.component.scss']
})
export class HapusDokterLuarDialogComponent implements OnInit {

  dokter;
	constructor(
		public dialogRef: MatDialogRef<HapusDokterLuarDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.dokter = data.dokter;
	}

	ngOnInit(): void {
		this.getData();
	}
	getData() {
		console.log(this.data);
	}
	hapusDokter(e) {
		console.log(e);
		this.dialogRef.close('hapus');
	}
	batal() {
		this.dialogRef.close(); 
	}

}
