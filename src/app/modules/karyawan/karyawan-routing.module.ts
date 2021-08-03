import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KaryawanLayoutComponent } from './pages/karyawan-layout/karyawan-layout.component';


const routes: Routes = [
  {
		path: '',
		component: KaryawanLayoutComponent,
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KaryawanRoutingModule { }
