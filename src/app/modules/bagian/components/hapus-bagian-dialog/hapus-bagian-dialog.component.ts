import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'hapus-bagian-dialog',
  templateUrl: './hapus-bagian-dialog.component.html',
  styleUrls: ['./hapus-bagian-dialog.component.scss']
})
export class HapusBagianDialogComponent implements OnInit {

  bagian;
	constructor(
		public dialogRef: MatDialogRef<HapusBagianDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.bagian = data.bagian;
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
