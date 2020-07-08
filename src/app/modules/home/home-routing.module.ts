import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/transaction/pages/layout/layout.component';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: '',
				component: HomeLayoutComponent,
            }
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomeRoutingModule {}
