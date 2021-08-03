import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DokterLuarLayoutComponent } from './pages/dokter-luar-layout/dokter-luar-layout.component';


const routes: Routes = [
  {
    path: '',
		component: DokterLuarLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DokterLuarRoutingModule { }
