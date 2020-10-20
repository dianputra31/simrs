import { Component, Inject, OnInit } from '@angular/core';
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BaseService } from '../../../../core/base-service/service/base.service';

@Component({
	selector: 'approval-confirmation-dialog',
	templateUrl: './approval-confirmation-dialog.component.html',
	styleUrls: ['./approval-confirmation-dialog.component.scss'],
})
export class ApprovalConfirmationDialogComponent implements OnInit {
	subsribers: Subscription[];
	items: any[];
	constructor(
		public dialogRef: MatDialogRef<ApprovalConfirmationDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public modalData: any,
		private route: ActivatedRoute,
		private router: Router,
		private service: BaseService,
		public dialog: MatDialog
	) {
		this.items = modalData.cartList;
	}

	ngOnInit(): void {
		this.subsribers = [];
	}

	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe);
	}

	goesToPage(a) {
		this.dialogRef.close();
		this.router.navigate([a]);
	}

	tutupModal() {
		this.dialogRef.close();
	}

	proses() {
		this.dialogRef.close('proses');
	}

	nItems() {
		return this.items.length;
	}
}
