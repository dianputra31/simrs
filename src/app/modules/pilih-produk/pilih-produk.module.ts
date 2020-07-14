import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { CatalogComponent } from './components/catalog/catalog.component';
import { DialogLocationSectionComponent } from './components/dialog-location-section/dialog-location-section.component';
import { FilterCardComponent } from './components/filter-card/filter-card.component';
import { LocationSectionComponent } from './components/location-section/location-section.component';
import { PilihProdukLayoutComponent } from './pages/pilih-produk-layout/pilih-produk-layout.component';
import { PilihProdukRoutingModule } from './pilih-produk-routing.module';
@NgModule({
	declarations: [
		PilihProdukLayoutComponent,
		FilterCardComponent,
		LocationSectionComponent,
		DialogLocationSectionComponent,
		CatalogComponent,
	],
	imports: [CommonModule, PilihProdukRoutingModule, SharedModule],
})
export class PilihProdukModule {}