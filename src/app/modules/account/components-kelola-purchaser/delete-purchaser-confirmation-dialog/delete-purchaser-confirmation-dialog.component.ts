import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserDeleteUrl } from '../../../../app.constant';
@Component({
	selector: 'delete-purchaser-confirmation-dialog',
	templateUrl: './delete-purchaser-confirmation-dialog.component.html',
	styleUrls: ['./delete-purchaser-confirmation-dialog.component.scss'],
})
export class DeletePurchaserConfirmationDialogComponent implements OnInit {
	user;
	subscriptions: Subscription[] = [];
	constructor(
		public dialogRef: MatDialogRef<
			DeletePurchaserConfirmationDialogComponent
		>,
		@Inject(MAT_DIALOG_DATA) public modalData: any,
		private route: ActivatedRoute,
		private router: Router,
		public dialog: MatDialog,
		public http: HttpClient
	) {
		console.log(modalData.user);
		this.user = modalData.user;
	}

	ngOnInit(): void {}

	ngOnDestroy() {
		this.subscriptions.forEach((each) => each.unsubscribe);
	}

	hapus() {
		const param = {};
		const sub = this.http
			.post(UserDeleteUrl + `?delete_email=${this.user.email}`, param)
			.pipe(
				map((resp: any): any => {
					return resp;
				}),
				catchError((err, caught: Observable<HttpEvent<any>>) => {
					if (err instanceof HttpErrorResponse && err.status == 401) {
						// this.storageService.clear();
						// this._document.defaultView.location.reload();
						return of(err as any);
					}
					throw err;
				})
			)
			.subscribe((resp) => {
				this.dialogRef.close();
			});

		this.subscriptions.push(sub);
	}

	tutupModal() {
		this.dialogRef.close();
	}
}
