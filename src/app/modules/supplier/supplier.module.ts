import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierLayoutComponent } from './pages/supplier-layout/supplier-layout.component';
import { InfoSupplierCardComponent } from './components/info-supplier-card/info-supplier-card.component';
import { TambahSupplierDialogComponent } from './components/tambah-supplier-dialog/tambah-supplier-dialog.component';
import { EditSupplierDialogComponent } from './components/edit-supplier-dialog/edit-supplier-dialog.component';
import { HapusSupplierDialogComponent } from './components/hapus-supplier-dialog/hapus-supplier-dialog.component';


@NgModule({
  declarations: [SupplierLayoutComponent, InfoSupplierCardComponent, TambahSupplierDialogComponent, EditSupplierDialogComponent, HapusSupplierDialogComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule
  ]
})
export class SupplierModule { }
