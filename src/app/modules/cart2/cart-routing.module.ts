import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CartLayoutComponent } from './pages/cart-layout/cart-layout.component';

const routes: Routes = [
	{
		path: '',
		component: CartLayoutComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	exports: [RouterModule],
})
export class CartRoutingModule {}
