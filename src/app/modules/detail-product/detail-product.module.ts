import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DetailProductRoutingModule } from './detail-product-routing.module';
import { DetailProductLayoutComponent } from './pages/detail-product-layout/detail-product-layout.component';

@NgModule({
	declarations: [DetailProductLayoutComponent],
	imports: [CommonModule, DetailProductRoutingModule],
})
export class DetailProductModule {}
