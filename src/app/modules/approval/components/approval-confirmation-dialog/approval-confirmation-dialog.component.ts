import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApprovalUrl } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { CartItemResponseModel } from '../../../../models/cart-item-response.model';
import { SelectedCartItemModel } from '../../../../models/selected-cart-item.model';
import { SelectedCartItemRequestModel } from '../../../../models/selected-cart-request.model';
import { ApprovalResultConfirmationDialogComponent } from '../approval-result-confirmation-dialog/approval-result-confirmation-dialog.component';


@Component({
	selector: 'approval-confirmation-dialog',
	templateUrl: './approval-confirmation-dialog.component.html',
	styleUrls: ['./approval-confirmation-dialog.component.scss']
})
export class ApprovalConfirmationDialogComponent implements OnInit {

	subsribers: Subscription[]
	constructor(
		public dialogRef: MatDialogRef<ApprovalConfirmationDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public modalData: any,
		private route: ActivatedRoute,
		private router: Router,
		private service: BaseService,
		public dialog: MatDialog,
	) {
		modalData.cartList
	}

	ngOnInit(): void {
		this.subsribers = [];
	}

	ngOnDestroy() {
		this.subsribers.forEach((each) => each.unsubscribe);
	}


	openDialogLocation(des) {
		//processing data
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-result-confirmation';
		dialogConfig.height = 'auto';
		dialogConfig.width = '477px';
		dialogConfig.height = '155px';
		dialogConfig.panelClass = 'border-radius:20px';
		dialogConfig.data = {
			pageBefore: this.router.url,
			pageDestination: des,
			modePopUp: '1',
		};
		const modalDialog = this.dialog.open(
			ApprovalResultConfirmationDialogComponent,
			dialogConfig
		);
		return false;
	}


	goesToPage(a) {
		this.dialogRef.close();
		this.router.navigate([a]);
	}

	tutupModal() {
		this.dialogRef.close();
	}

	proses() {
		console.log(this.modalData)

		var test = new SelectedCartItemModel()
		test.cart_request_id = this.modalData.product_id

		var cartreq = new SelectedCartItemRequestModel()
		cartreq.cart_list = []
		cartreq.cart_list.push(test)

		const sub = this.service
			.postData(ApprovalUrl, cartreq, CartItemResponseModel, false)
			.subscribe((resp) => {
				this.dialogRef.close();
				this.openDialogLocation('./transaction');
			})
		this.subsribers.push(sub);
		// this.dialogRef.close();
		// this.openDialogLocation('./transaction');
	}

}
