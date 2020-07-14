import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PilihProdukLayoutComponent } from './pages/pilih-produk-layout/pilih-produk-layout.component';
import { PilihProdukRoutingModule } from './pilih-produk-routing.module';

@NgModule({
	declarations: [PilihProdukLayoutComponent],
	imports: [CommonModule, PilihProdukRoutingModule],
})
export class PilihProdukModule {}
