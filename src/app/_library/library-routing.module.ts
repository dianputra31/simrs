import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './components/color/color.component';
import { LibraryLayoutComponent } from './pages/library-layout/library-layout.component';

const routes: Routes = [
	{
		path: '',
		component: LibraryLayoutComponent,
		children: [
			{
				path: 'color',
				component: ColorComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LibraryRoutingModule {}
