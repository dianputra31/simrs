import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
	ViewChild,
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApprovalRejectUrl } from '../../../../app.constant';
import { BaseService } from '../../../../core/base-service/service/base.service';
import { CartListItemModel } from '../../../../models/cart-list-item.model';
import { ToastService } from '../../../../shared/toast/toast-service';
import { ApprovalRejectDialogComponent } from '../../../approval2/components/approval-reject-dialog/approval-reject-dialog.component';
@Component({
	selector: 'item-card',
	templateUrl: './item-card.component.html',
	styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
	@Input() item: CartListItemModel;
	@ViewChild('dangerTpl') dangerTpl;
	@Output() onReject = new EventEmitter();
	@BlockUI() blockUI: NgBlockUI;

	subscribers: Subscription[];
	constructor(
		private http: HttpClient,
		private dialog: MatDialog,
		public service: BaseService,
		public toastService: ToastService
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
		this.http
			.post(ApprovalRejectUrl, param)
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
				this.showDanger();
				this.onReject.emit();
				this.blockUI.stop();
			});
	}

	availability(availability) {
		if (availability == 'AVAILABLE' || availability == 'LIMITED') {
			return 'AVAILABLE';
		} else {
			return 'OUT OF STOCK';
		}
	}
}
