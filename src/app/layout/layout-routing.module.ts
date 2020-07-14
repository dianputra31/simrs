import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth/guard/auth.guard';
import { LoginLayoutComponent } from './pages/login-layout/login-layout.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';

const routes: Routes = [
	{
		path: '',
		component: LoginLayoutComponent,
	},
	{
		path: '',
		component: MainLayoutComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'home',
				loadChildren: () =>
					import('../modules/home/home.module').then(
						(m) => m.HomeModule
					),
			},
			{
				path: 'profile',
				loadChildren: () =>
					import('../modules/profile/profile.module').then(
						(m) => m.ProfileModule
					),
			},
			{
				path: 'detail-product',
				loadChildren: () =>
					import(
						'../modules/detail-product/detail-product.module'
					).then((m) => m.DetailProductModule),
			},
			{
				path: 'pilih-produk',
				loadChildren: () =>
					import('../modules/pilih-produk/pilih-produk.module').then(
						(m) => m.PilihProdukModule
					),
			},
		],
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LayoutRoutingModule {}
