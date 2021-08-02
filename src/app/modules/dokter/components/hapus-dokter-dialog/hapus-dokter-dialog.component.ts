import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'hapus-dokter-dialog',
  templateUrl: './hapus-dokter-dialog.component.html',
  styleUrls: ['./hapus-dokter-dialog.component.scss']
})
export class HapusDokterDialogComponent implements OnInit {

  dokter;
	constructor(
		public dialogRef: MatDialogRef<HapusDokterDialogComponent>,
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
