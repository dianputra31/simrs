import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BagianLayoutComponent } from './pages/bagian-layout/bagian-layout.component';


const routes: Routes = [
  {
    path: '',
    component: BagianLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BagianRoutingModule { }
