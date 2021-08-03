import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Shared2Module } from '../../shared2/shared2.module';
import { EditSupplierDialogComponent } from './components/edit-supplier-dialog/edit-supplier-dialog.component';
import { HapusSupplierDialogComponent } from './components/hapus-supplier-dialog/hapus-supplier-dialog.component';
import { InfoSupplierCardComponent } from './components/info-supplier-card/info-supplier-card.component';
import { TambahSupplierBaruDialogComponent } from './components/tambah-supplier-baru-dialog/tambah-supplier-baru-dialog.component';
import { SupplierLayoutComponent } from './pages/supplier-layout/supplier-layout.component';
import { SupplierRoutingModule } from './supplier-routing.module';



@NgModule({
  declarations: [SupplierLayoutComponent, InfoSupplierCardComponent, TambahSupplierBaruDialogComponent, EditSupplierDialogComponent, HapusSupplierDialogComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    SharedModule,
    Shared2Module
  ]
})
export class SupplierModule { }
