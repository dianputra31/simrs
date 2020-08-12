import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApprovalConfirmationDialogComponent } from '../../../modules/approval/components/approval-confirmation-dialog/approval-confirmation-dialog.component';
import { PopUpRequestApprovalComponent } from '../../../shared/components/pop-up-request-approval/pop-up-request-approval.component';



@Component({
	selector: 'box-cart-price',
	templateUrl: './box-cart-price.component.html',
	styleUrls: ['./box-cart-price.component.scss'],
})
export class BoxCartPriceComponent implements OnInit {
	@Input() buttonLabel: string;
	@Input() buttonDisable: boolean = true;

	constructor(
		public dialog: MatDialog,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit(): void { }

	openDialogLocation(des) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
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
			PopUpRequestApprovalComponent,
			dialogConfig
		);
		return false;
	}


	openConfirmDialog(des) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = 'auto';
		dialogConfig.width = '480px';
		dialogConfig.height = '170px';
		dialogConfig.panelClass = 'border-radius:10px';
		dialogConfig.data = {
			pageBefore: this.router.url,
			pageDestination: des,
			modePopUp: '1',
		};
		const modalDialog = this.dialog.open(
			ApprovalConfirmationDialogComponent,
			dialogConfig
		);
		return false;
	}

	clickButtonLabel() {
		// console.log('Selanjutnya');
		if (this.buttonDisable) {
			if (this.buttonLabel == 'Selanjutnya') {
				this.router.navigate(['./request-approval']);
			} else if (this.buttonLabel == 'Request Approval') {
				this.openDialogLocation('./cart');
			} else if (this.buttonLabel == 'Proses') {
				this.openConfirmDialog('./approval');
			}
		}
	}
}
