import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'selesai-confirmation-dialog',
	templateUrl: './selesai-confirmation-dialog.component.html',
	styleUrls: ['./selesai-confirmation-dialog.component.scss'],
})
export class SelesaiConfirmationDialogComponent implements OnInit {
	constructor(
		public dialogRef: MatDialogRef<SelesaiConfirmationDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public modalData: any,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {}

	goesToPage(a) {
		this.dialogRef.close();
		this.router.navigate([a]);
	}

	ok() {
		this.dialogRef.close('ok');
	}

	cancel() {
		this.dialogRef.close('cancel');
	}
}
