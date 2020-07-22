import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ImageMainComponent } from './components/image-main/image-main.component';
import { ImagePriceSectionComponent } from './components/image-price-section/image-price-section.component';
import { PriceComponent } from './components/price/price.component';
import { DetailProductRoutingModule } from './detail-product-routing.module';
import { DetailProductLayoutComponent } from './pages/detail-product-layout/detail-product-layout.component';

@NgModule({
	declarations: [
		DetailProductLayoutComponent,
		ImagePriceSectionComponent,
		ImageMainComponent,
		PriceComponent,
	],
	imports: [CommonModule, DetailProductRoutingModule, SharedModule],
})
export class DetailProductModule {}
