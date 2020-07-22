import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ImageMainComponent } from './components/image-main/image-main.component';
import { ImagePriceSectionComponent } from './components/image-price-section/image-price-section.component';
import { InfoRowComponent } from './components/info-row/info-row.component';
import { PriceComponent } from './components/price/price.component';
import { WarnaComponent } from './components/warna/warna.component';
import { DetailProductRoutingModule } from './detail-product-routing.module';
import { DetailProductLayoutComponent } from './pages/detail-product-layout/detail-product-layout.component';
import { DeskripsiSpesifikasiSectionComponent } from './components/deskripsi-spesifikasi-section/deskripsi-spesifikasi-section.component';
import { FloatingFooterComponent } from './components/floating-footer/floating-footer.component';

@NgModule({
	declarations: [
		DetailProductLayoutComponent,
		ImagePriceSectionComponent,
		ImageMainComponent,
		PriceComponent,
		BreadcrumbComponent,
		WarnaComponent,
		InfoRowComponent,
		DeskripsiSpesifikasiSectionComponent,
		FloatingFooterComponent,
	],
	imports: [
		CommonModule,
		DetailProductRoutingModule,
		SharedModule,
		FormsModule,
	],
})
export class DetailProductModule { }
