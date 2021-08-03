import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Shared2Module } from '../../shared2/shared2.module';
import { BagianRoutingModule } from './bagian-routing.module';
import { EditBagianDialogComponent } from './components/edit-bagian-dialog/edit-bagian-dialog.component';
import { HapusBagianDialogComponent } from './components/hapus-bagian-dialog/hapus-bagian-dialog.component';
import { InfoBagianCardComponent } from './components/info-bagian-card/info-bagian-card.component';
import { TambahBagianBaruDialogComponent } from './components/tambah-bagian-baru-dialog/tambah-bagian-baru-dialog.component';
import { BagianLayoutComponent } from './pages/bagian-layout/bagian-layout.component';


@NgModule({
  declarations: [TambahBagianBaruDialogComponent, InfoBagianCardComponent, EditBagianDialogComponent, HapusBagianDialogComponent, BagianLayoutComponent],
  imports: [
    CommonModule,
    BagianRoutingModule,
    SharedModule,
    Shared2Module
  ]
})
export class BagianModule { }
