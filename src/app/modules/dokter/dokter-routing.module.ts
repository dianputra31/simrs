import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DokterLayoutComponent } from './pages/dokter-layout/dokter-layout.component';

const routes: Routes = [
  {
		path: '',
		component: DokterLayoutComponent,
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DokterRoutingModule { }
 