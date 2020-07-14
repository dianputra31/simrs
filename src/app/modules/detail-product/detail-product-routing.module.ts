import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductLayoutComponent } from './pages/detail-product-layout/detail-product-layout.component';

const routes: Routes = [
	{
		path: '',
		component: DetailProductLayoutComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DetailProductRoutingModule {}
