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
				loadChildren: () => import('../modules/home/home.module').then(m => m.HomeModule),
			},
		],
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LayoutRoutingModule {}
