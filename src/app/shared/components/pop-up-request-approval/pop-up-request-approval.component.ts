import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'pop-up-request-approval',
	templateUrl: './pop-up-request-approval.component.html',
	styleUrls: ['./pop-up-request-approval.component.scss'],
})
export class PopUpRequestApprovalComponent implements OnInit {
	constructor(
		public dialogRef: MatDialogRef<PopUpRequestApprovalComponent>,
		@Inject(MAT_DIALOG_DATA) public modalData: any,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit(): void { }

	goesToPage(a) {
		// this.dialogRef.close();
		this.router.navigate([a]);
		this.dialogRef.close({ event: 'proses' })
	}
}
