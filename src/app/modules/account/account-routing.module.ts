import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDashboardComponent } from './pages/account-dashboard/account-dashboard.component';
import { AccountInfoPersonalComponent } from './pages/account-info-personal/account-info-personal.component';
import { AccountInfoPerusahaanComponent } from './pages/account-info-perusahaan/account-info-perusahaan.component';
import { AccountKreditPerusahaanComponent } from './pages/account-kredit-perusahaan/account-kredit-perusahaan.component';
import { AccountLayoutComponent } from './pages/account-layout/account-layout.component';

const routes: Routes = [
	{
		path: '',
		component: AccountLayoutComponent,
		children: [
			{
				path: '',
				component: AccountDashboardComponent,
			},
			{
				path: 'info-personal',
				component: AccountInfoPersonalComponent,
			},
			{
				path: 'info-perusahaan',
				component: AccountInfoPerusahaanComponent,
			},
			{
				path: 'kredit-perusahaan',
				component: AccountKreditPerusahaanComponent,
			},
			{
				path: 'tagihan',
				component: AccountDashboardComponent,
			},
			{
				path: 'kelola-purchaser',
				component: AccountDashboardComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AccountRoutingModule {}
