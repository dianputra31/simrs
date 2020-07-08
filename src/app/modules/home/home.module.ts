import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatalogSectionComponent } from './components/catalog-section/catalog-section.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import { CatalogCardComponent } from './components/catalog-card/catalog-card.component';

@NgModule({
	declarations: [HomeLayoutComponent, CatalogSectionComponent, CatalogCardComponent],
	imports: [CommonModule, RouterModule, HomeRoutingModule],
})
export class HomeModule {}
