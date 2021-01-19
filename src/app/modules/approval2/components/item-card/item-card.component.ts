import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
	ViewChild
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import { ApprovalCount, ApprovalRejectUrl, RESPONSE } from '../../../../app.constant';
import { HttpService } from '../../../../core/base-service/http.service';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { RedirectParameterService } from '../../../../layout/redirect-parameter.service';
import { ToastService } from '../../../../shared/toast/toast-service';
import { ApprovalRejectDialogComponent } from '../../../approval2/components/approval-reject-dialog/approval-reject-dialog.component';
@Component({
	selector: 'item-card',
	templateUrl: './item-card.component.html',
	styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
	@Input() item: any;
	@Input() buttonAvail: boolean;
	@ViewChild('dangerTpl') dangerTpl;
	@Output() onReject = new EventEmitter();
	@BlockUI() blockUI: NgBlockUI;

	subscribers: Subscription[];
	constructor(
		private http: HttpService,
		private dialog: MatDialog,
		public service: BaseService,
		public toastService: ToastService,
		public router: Router,
		private _redirectparam: RedirectParameterService
	) {}

	ngOnInit(): void {
		this.subscribers = [];
	}

	ngOnDestroy() {
		this.subscribers.forEach((each) => each.unsubscribe);
	}

	handleClickCheckbox(checked) {
		this.item.selected = checked;
	}

	onImgError(event) {
		event.target.src = '../../../../assets/image/icons/default-item.png';
	}

	showDanger() {
		this.toastService.removeAll();
		this.toastService.show(this.dangerTpl, {
			delay: 15000,
			classname: 'bawah-tengah',
		});
	}

	tolakItem(item) {
		this.openRejectDialog(item);
	}

	openRejectDialog(item) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = 'auto';
		dialogConfig.width = '480px';
		dialogConfig.height = '240px';
		dialogConfig.panelClass = 'border-radius:10px';
		dialogConfig.data = {
			modePopUp: '1',
			item: item,
		};
		const modalDialog = this.dialog.open(
			ApprovalRejectDialogComponent,
			dialogConfig
		);

		modalDialog.afterClosed().subscribe((result) => {
			if (result?.action == 'tolak') {
				this.prosesTolak(item, result?.message);
			}
		});
		return false;
	}

	prosesTolak(item, message) {
		const param = {
			cart_list: [
				{
					cart_request_id: item.id,
				},
			],
			message: message,
		};
		this.blockUI.start();
		this.http.post(ApprovalRejectUrl, param).subscribe((resp) => {
			this.onReject.emit();
			this.blockUI.stop();
			this.hitungulang();
		});
	}


	hitungulang(){
		const sub = this.http.post(ApprovalCount, {}).subscribe(
			(resp) => {
				if (resp.status.rc === RESPONSE.SUCCESS) {
					this._redirectparam.nApproval = resp.data.approval_count;
				} 
			},
			(error) => {
				this.http.handleError(error);
			}
		);
}

	availability(availability) {
		if (availability == 'AVAILABLE' || availability == 'LIMITED') {
			return 'AVAILABLE';
		} else {
			return 'OUT OF STOCK';
		}
	}

	itemClicked() {
		this.router.navigate([
			'./detail-product/' + this.item.partner_sku_item,
		]);
	}
}
