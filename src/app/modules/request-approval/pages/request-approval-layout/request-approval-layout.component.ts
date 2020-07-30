import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PopUpRequestApprovalComponent } from '../../../../shared/components/pop-up-request-approval/pop-up-request-approval.component';


export let browserRefresh = false;

@Component({
	selector: 'request-approval-layout',
	templateUrl: './request-approval-layout.component.html',
	styleUrls: ['./request-approval-layout.component.scss']
})
export class RequestApprovalLayoutComponent implements OnInit {
	subscription: Subscription;


	constructor(
		public dialog: MatDialog,
		private route: ActivatedRoute,
		private router: Router,
		location: PlatformLocation) {

		location.onPopState(() => {


			this.openDialogLocation('./cart');


			// var r = confirm("You pressed a Back button! Are you sure?!");

			// if (r == true) {
			// 	history.back();
			// 	console.log("Hiya hiya hiya hiya");
			// } else {
			// 	console.log("ora ora ora ora");
			// }
		})

		/*
		this.subscription = router.events.subscribe((event) => {
			if (event instanceof NavigationStart) {
				// console.log("here");
				// browserRefresh = !router.navigated;
			} 
		});
		*/

	}


	openDialogLocation(des) {

		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = "modal-component";
		dialogConfig.height = "auto";
		dialogConfig.width = "477px";
		dialogConfig.height = "155px";
		dialogConfig.panelClass = "border-radius:20px";
		dialogConfig.data = {
			'pageBefore': this.router.url,
			'pageDestination': des,
			'modePopUp': '0'
		}
		const modalDialog = this.dialog.open(PopUpRequestApprovalComponent, dialogConfig);
		return false;

	}

	ngOnInit(): void {
	}

}
