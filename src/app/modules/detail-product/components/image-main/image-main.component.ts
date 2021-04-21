import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogPopupImageComponent } from '../../../../shared/components/dialog-popup-image/dialog-popup-image.component';
import { ProductDetailResponseModel } from '../../models/product-detail-response.model';

@Component({
	selector: 'image-main',
	templateUrl: './image-main.component.html',
	styleUrls: ['./image-main.component.scss'],
})
export class ImageMainComponent implements OnInit {
	@Input() wide: number;
	@Input() margin: number;
	@Input() pl: number;
	@Input() borderRadius: number;

	@Input() productDetail: ProductDetailResponseModel;

	imageMainSelected;

	constructor(public dialog: MatDialog) { }

	stylesObj = {};

	openDialogImage(imageMainSelected) {
		this.imageMainSelected = imageMainSelected;
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = false;
		dialogConfig.id = 'modal-component';
		dialogConfig.height = 'auto';
		dialogConfig.width = '350px';
		//dialogConfig.panelClass = "border-radius:0px";
		dialogConfig.data = {
			images: [this.productDetail.product_image],
			imageMainSelected: this.imageMainSelected,
		};
		const modalDialog = this.dialog.open(
			DialogPopupImageComponent,
			dialogConfig
		);
	}

	ngOnInit(): void {
		this.stylesObj = {
			width: this.wide,
			margin: this.margin,
			paddingLeft: this.pl,
			borderRadius: this.borderRadius,
		};
	}

	changeImageMain($event) {
		//console.log($event)
		this.imageMainSelected = $event;
	}


	onImgError(event) {
		event.target.src = '../../../../assets/image/icons/default-item.png';
	}
}
