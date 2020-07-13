import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { CatalogCardButtonComponent } from './components/catalog-card-button/catalog-card-button.component';
import { CatalogCardComponent } from './components/catalog-card/catalog-card.component';
import { CatalogSectionComponent } from './components/catalog-section/catalog-section.component';
import { DialogLocationSectionComponent } from './components/dialog-location-section/dialog-location-section.component';
import { LocationSectionComponent } from './components/location-section/location-section.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import { BannerSectionComponent } from './components/banner-section/banner-section.component';

@NgModule({
	declarations: [
		HomeLayoutComponent,
		CatalogSectionComponent,
		CatalogCardComponent,
		CatalogCardButtonComponent,
		LocationSectionComponent,
		DialogLocationSectionComponent,
		BannerSectionComponent,
	],
	imports: [CommonModule, RouterModule, HomeRoutingModule, FormsModule, MatDialogModule],
	exports: [DialogLocationSectionComponent],
	entryComponents: [DialogLocationSectionComponent],
})
export class HomeModule { }
