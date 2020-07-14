import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../../shared/shared.module';
import { BannerSectionComponent } from './components/banner-section/banner-section.component';
import { CatalogSectionComponent } from './components/catalog-section/catalog-section.component';
import { DialogLocationSectionComponent } from './components/dialog-location-section/dialog-location-section.component';
import { LocationSectionComponent } from './components/location-section/location-section.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';

@NgModule({
	declarations: [
		HomeLayoutComponent,
		CatalogSectionComponent,
		LocationSectionComponent,
		DialogLocationSectionComponent,
		BannerSectionComponent,
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
	],
	exports: [DialogLocationSectionComponent],
	entryComponents: [DialogLocationSectionComponent],
})
export class HomeModule {}
