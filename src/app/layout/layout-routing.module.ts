import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth/guard/auth.guard';
import { AccountTagihanPrintComponent } from '../modules/account/pages/account-tagihan-print/account-tagihan-print.component';
import { DetailProductLayoutNoTokenComponent } from '../modules/detail-product/pages/detail-product-layout-no-token/detail-product-layout-no-token.component';
import { LoginLayout2Component } from './pages/login-layout2/login-layout2.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';

const routes: Routes = [
	{
		path: '',
		// component: LoginLayout2Component,
		component: LoginLayout2Component,
	},
	{
		path: 'tagihan-print/:invoice_no',
		component: AccountTagihanPrintComponent,
	},
	{
		path: 'detail/:sku-item',
		component: DetailProductLayoutNoTokenComponent,
	},
	{
		path: '',
		component: MainLayoutComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'home',
				canActivate: [AuthGuard],
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
				path: 'detail-product/:sku-item',
				loadChildren: () =>
					import(
						'../modules/detail-product/detail-product.module'
					).then((m) => m.DetailProductModule),
			},
			{
				path: 'pilih-produk/:category_id/:sub_category_id',
				loadChildren: () =>
					import('../modules/pilih-produk/pilih-produk.module').then(
						(m) => m.PilihProdukModule
					),
			},
			{
				path: 'pilih-produk/:category_id/:sub_category_id/:keyword',
				loadChildren: () =>
					import('../modules/pilih-produk/pilih-produk.module').then(
						(m) => m.PilihProdukModule
					),
			},
			{
				path: 'cart',
				loadChildren: () =>
					import('../modules/cart2/cart2.module').then(
						(m) => m.Cart2Module
					),
			},
			{
				path: 'request-approval',
				loadChildren: () =>
					import(
						'../modules/request-approval/request-approval.module'
					).then((m) => m.RequestApprovalModule),
			},
			{
				path: 'approval',
				loadChildren: () =>
					import('../modules/approval2/approval2.module').then(
						(m) => m.Approval2Module
					),
			},
			{
				path: 'transaction',
				loadChildren: () =>
					import('../modules/transaction/transaction.module').then(
						(m) => m.TransactionModule
					),
			},
			{
				path: 'transaction-detail/:purchased_id/:item_id',

				loadChildren: () =>
					import(
						'../modules/transaction-detail/transaction-detail.module'
					).then((m) => m.TransactionDetailModule),
			},
			{
				path: 'account',
				loadChildren: () =>
					import('../modules/account/account.module').then(
						(m) => m.AccountModule
					),
			},
		],
	},
	{
		path: 'library',
		loadChildren: () =>
			import('../_library/library.module').then((m) => m.LibraryModule),
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LayoutRoutingModule {}
