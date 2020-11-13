import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedPipesModule } from './../../pipes/shared-pipes.module';
import { SharedModule } from './../../shared/shared.module';
import { CatalogComponent } from './components/catalog/catalog.component';
import { FilterCardComponent } from './components/filter-card/filter-card.component';
import { PilihProdukLayoutComponent } from './pages/pilih-produk-layout/pilih-produk-layout.component';
import { PilihProdukRoutingModule } from './pilih-produk-routing.module';

@NgModule({
	declarations: [
		PilihProdukLayoutComponent,
		FilterCardComponent,
		CatalogComponent,
	],
	imports: [
		CommonModule,
		PilihProdukRoutingModule,
		SharedModule,
		SharedPipesModule,
		MatProgressSpinnerModule,
		InfiniteScrollModule,
		FormsModule,
	],
})
export class PilihProdukModule { }
