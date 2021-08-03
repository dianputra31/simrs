import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'hapus-karyawan-dialog',
  templateUrl: './hapus-karyawan-dialog.component.html',
  styleUrls: ['./hapus-karyawan-dialog.component.scss']
})
export class HapusKaryawanDialogComponent implements OnInit {

  karyawan;
	constructor(
		public dialogRef: MatDialogRef<HapusKaryawanDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.karyawan = data.karyawan;
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



