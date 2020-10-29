import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'any-alert',
	templateUrl: './any-alert.component.html',
	styleUrls: ['./any-alert.component.scss'],
})
export class AnyAlertComponent implements OnInit {
	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any,
		public dialogRef: MatDialogRef<AnyAlertComponent>
	) {}

	ngOnInit(): void {}

	ok() {
		this.dialogRef.close();
	}
}
