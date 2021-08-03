import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Shared2Module } from '../../shared2/shared2.module';
import { EditKaryawanDialogComponent } from './components/edit-karyawan-dialog/edit-karyawan-dialog.component';
import { HapusKaryawanDialogComponent } from './components/hapus-karyawan-dialog/hapus-karyawan-dialog.component';
import { InfoKaryawanCardComponent } from './components/info-karyawan-card/info-karyawan-card.component';
import { TambahKaryawanBaruDialogComponent } from './components/tambah-karyawan-baru-dialog/tambah-karyawan-baru-dialog.component';
import { KaryawanRoutingModule } from './karyawan-routing.module';
import { KaryawanLayoutComponent } from './pages/karyawan-layout/karyawan-layout.component';

@NgModule({
  declarations: [KaryawanLayoutComponent, InfoKaryawanCardComponent, EditKaryawanDialogComponent, HapusKaryawanDialogComponent, TambahKaryawanBaruDialogComponent],
  imports: [
    CommonModule,
    KaryawanRoutingModule,
    SharedModule,
    Shared2Module
  ]
})
export class KaryawanModule { }
 