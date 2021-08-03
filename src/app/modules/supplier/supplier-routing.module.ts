import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierLayoutComponent } from './pages/supplier-layout/supplier-layout.component';


const routes: Routes = [
  {
    path: '',
		component: SupplierLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
