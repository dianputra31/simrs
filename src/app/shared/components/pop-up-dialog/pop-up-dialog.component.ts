import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'pop-up-dialog',
	templateUrl: './pop-up-dialog.component.html',
	styleUrls: ['./pop-up-dialog.component.scss'],
})
export class PopUpDialogComponent implements OnInit {
	constructor(
		public dialogRef: MatDialogRef<PopUpDialogComponent>,
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
