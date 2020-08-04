import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PopUpDialogComponent } from '../../../../shared/components/pop-up-dialog/pop-up-dialog.component';

export let browserRefresh = false;

@Component({
	selector: 'request-approval-layout',
	templateUrl: './request-approval-layout.component.html',
	styleUrls: ['./request-approval-layout.component.scss'],
})
export class RequestApprovalLayoutComponent implements OnInit {

	subscription: Subscription;

	constructor(
		public dialog: MatDialog,
		private route: ActivatedRoute,
		private router: Router,
		location: PlatformLocation
	) {
		history.pushState(null, null, window.location.href);

		location.onPopState(() => {
<<<<<<< HEAD
			this.openDialogLocation('./cart');
		});
	}

=======

			history.pushState(null, null, window.location.pathname);
			this.openDialogLocation('./cart');

		})


	}



>>>>>>> e02abf19ec47d3ebbae980f93d2b08cfd3415543
	openDialogLocation(des) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = 'auto';
		dialogConfig.width = '477px';
		dialogConfig.height = '155px';
		dialogConfig.panelClass = 'border-radius:20px';
		dialogConfig.data = {
<<<<<<< HEAD
			pageBefore: this.router.url,
			pageDestination: des,
		};

		const modalDialog = this.dialog.open(
			PopUpDialogComponent,
			dialogConfig
		);
		modalDialog.afterClosed().subscribe((data) => {
			if (data == 'ok') {
				this.router.navigate(['./cart']);
			} else if (data == 'cancel') {
				history.pushState(null, null, window.location.href);
			}
		});

		return false;
=======
			'pageBefore': './request-approval',
			'pageDestination': des,
			'modePopUp': '0'
		}
		const modalDialog = this.dialog.open(PopUpRequestApprovalComponent, dialogConfig);
		return false;

	}

	ngOnInit(): void {
		console.log(window.location.pathname);
		history.pushState(null, null, window.location.pathname);
>>>>>>> e02abf19ec47d3ebbae980f93d2b08cfd3415543
	}

	ngOnInit(): void {}
}
