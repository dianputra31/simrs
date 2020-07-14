import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DetailProductRoutingModule } from './detail-product-routing.module';
import { DetailProductLayoutComponent } from './pages/detail-product-layout/detail-product-layout.component';
import { ImagePriceSectionComponent } from './components/image-price-section/image-price-section.component';
import { ImageMainComponent } from './components/image-main/image-main.component';

@NgModule({
	declarations: [DetailProductLayoutComponent, ImagePriceSectionComponent, ImageMainComponent],
	imports: [CommonModule, DetailProductRoutingModule],
})
export class DetailProductModule {}
