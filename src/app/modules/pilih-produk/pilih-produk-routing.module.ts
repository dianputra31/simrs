import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilihProdukLayoutComponent } from './pages/pilih-produk-layout/pilih-produk-layout.component';

const routes: Routes = [
	{
		path: '',
		component: PilihProdukLayoutComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PilihProdukRoutingModule {}
