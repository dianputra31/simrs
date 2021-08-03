import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Shared2Module } from '../../shared2/shared2.module';
import { EditDokterDialogComponent } from './components/edit-dokter-dialog/edit-dokter-dialog.component';
import { HapusDokterDialogComponent } from './components/hapus-dokter-dialog/hapus-dokter-dialog.component';
import { InfoDokterCardComponent } from './components/info-dokter-card/info-dokter-card.component';
import { TambahDokterBaruDialogComponent } from './components/tambah-dokter-baru-dialog/tambah-dokter-baru-dialog.component';
import { DokterRoutingModule } from './dokter-routing.module';
import { DokterLayoutComponent } from './pages/dokter-layout/dokter-layout.component';

@NgModule({
  declarations: [
    DokterLayoutComponent, InfoDokterCardComponent, TambahDokterBaruDialogComponent, EditDokterDialogComponent, HapusDokterDialogComponent ],
  imports: [
    CommonModule,
    DokterRoutingModule,
    SharedModule,
    Shared2Module
  ]
}) 
export class DokterModule { }
