import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../../models/Approval.model';
import { ApprovalRejectDialogComponent } from './../approval-reject-dialog/approval-reject-dialog.component';

@Component({
	selector: 'item-approval',
	templateUrl: './item-approval.component.html',
	styleUrls: ['./item-approval.component.scss'],
})
export class ItemApprovalComponent implements OnInit {
	@Input() item: Product;
	@Output() clickEvent = new EventEmitter<Product>();
	constructor(
		public dialog: MatDialog,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit(): void { }

	actionTolak() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = 'auto';
		dialogConfig.width = '477px';
		dialogConfig.height = '220px';
		dialogConfig.panelClass = 'border-radius:20px';
		dialogConfig.data = {
			pageBefore: this.router.url,
		};

		const modalDialog = this.dialog.open(
			ApprovalRejectDialogComponent,
			dialogConfig
		);

		return false;
	}

	sendClick(item: Product) {
		this.clickEvent.emit(item);
		return this.item.available && this.item.cart;
	}

	onImgError(event) {
		event.target.src = '../../../../assets/image/icons/default-item.png';
	}

}
