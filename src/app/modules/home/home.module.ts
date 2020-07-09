import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CatalogCardButtonComponent } from './components/catalog-card-button/catalog-card-button.component';
import { CatalogCardComponent } from './components/catalog-card/catalog-card.component';
import { CatalogSectionComponent } from './components/catalog-section/catalog-section.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import { LocationSectionComponent } from './components/location-section/location-section.component';

@NgModule({
	declarations: [
		HomeLayoutComponent,
		CatalogSectionComponent,
		CatalogCardComponent,
		CatalogCardButtonComponent,
		LocationSectionComponent,
	],
	imports: [CommonModule, RouterModule, HomeRoutingModule, FormsModule],
})
export class HomeModule {}
