import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { BlockUIModule } from 'ng-block-ui';
import { OwlModule } from 'ngx-owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../../shared/shared.module';
import { BannerSectionComponent } from './components/banner-section/banner-section.component';
import { CatalogSectionComponent } from './components/catalog-section/catalog-section.component';
import { DialogWaitingApprovalComponent } from './components/dialog-waiting-approval/dialog-waiting-approval.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';

@NgModule({
	declarations: [
		HomeLayoutComponent,
		CatalogSectionComponent,
		BannerSectionComponent,
		DialogWaitingApprovalComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		HomeRoutingModule,
		FormsModule,
		MatDialogModule,
		CarouselModule,
		OwlModule,
		SharedModule,
		BlockUIModule.forRoot(),
	],
	exports: [SharedModule],
	entryComponents: [SharedModule],
})
export class HomeModule {}
