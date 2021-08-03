import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Shared2Module } from '../../shared2/shared2.module';
import { EditDokterLuarDialogComponent } from './components/edit-dokter-luar-dialog/edit-dokter-luar-dialog.component';
import { HapusDokterLuarDialogComponent } from './components/hapus-dokter-luar-dialog/hapus-dokter-luar-dialog.component';
import { InfoDokterLuarCardComponent } from './components/info-dokter-luar-card/info-dokter-luar-card.component';
import { TambahDokterLuarBaruDialogComponent } from './components/tambah-dokter-luar-baru-dialog/tambah-dokter-luar-baru-dialog.component';
import { DokterLuarRoutingModule } from './dokter-luar-routing.module';
import { DokterLuarLayoutComponent } from './pages/dokter-luar-layout/dokter-luar-layout.component';


@NgModule({
  declarations: [DokterLuarLayoutComponent, TambahDokterLuarBaruDialogComponent, EditDokterLuarDialogComponent, HapusDokterLuarDialogComponent, InfoDokterLuarCardComponent],
  imports: [
    CommonModule,
    DokterLuarRoutingModule,
    SharedModule,
    Shared2Module
  ]
})
export class DokterLuarModule { }
