import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'hapus-supplier-dialog',
  templateUrl: './hapus-supplier-dialog.component.html',
  styleUrls: ['./hapus-supplier-dialog.component.scss']
})
export class HapusSupplierDialogComponent implements OnInit {

  supplier;
	constructor(
		public dialogRef: MatDialogRef<HapusSupplierDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.supplier = data.supplier;
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
