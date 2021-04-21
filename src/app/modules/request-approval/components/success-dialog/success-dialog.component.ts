import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
	selector: 'success-dialog',
	templateUrl: './success-dialog.component.html',
	styleUrls: ['./success-dialog.component.scss'],
})
export class SuccessDialogComponent implements OnInit {
	constructor(
		private route: Router,
		public dialogRef: MatDialogRef<SuccessDialogComponent>
	) {}

	ngOnInit(): void {}

	ok() {
		this.route.navigate(['/approval']);
		this.dialogRef.close();
	}
}
