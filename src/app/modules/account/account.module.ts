import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { EditComponent } from './components-info-perusahaan/edit/edit.component';
import { LabelInputComponent } from './components-info-perusahaan/label-input/label-input.component';
import { NameAddressComponent } from './components-info-perusahaan/name-address/name-address.component';
import { RoundedInputComponent } from './components-info-perusahaan/rounded-input/rounded-input.component';
import { SetUtamaButtonComponent } from './components-info-perusahaan/set-utama-button/set-utama-button.component';
import { TambahAlamatBaruDialogComponent } from './components-info-perusahaan/tambah-alamat-baru-dialog/tambah-alamat-baru-dialog.component';
import { TrashCanComponent } from './components-info-perusahaan/trash-can/trash-can.component';
import { AddButtonComponent } from './components-kelola-purchaser/add-button/add-button.component';
import { AddPurchaserEditorComponent } from './components-kelola-purchaser/add-purchaser-editor/add-purchaser-editor.component';
import { DeletePurchaserConfirmationDialogComponent } from './components-kelola-purchaser/delete-purchaser-confirmation-dialog/delete-purchaser-confirmation-dialog.component';
import { PurchaserCardComponent } from './components-kelola-purchaser/purchaser-card/purchaser-card.component';
import { PurchaserListComponent } from './components-kelola-purchaser/purchaser-list/purchaser-list.component';
import { CentangImageComponent } from './components-kredit-perusahaan/centang-image/centang-image.component';
import { KreditTableComponent } from './components-kredit-perusahaan/kredit-table/kredit-table.component';
import { SilinderComponent } from './components-kredit-perusahaan/silinder/silinder.component';
import { TagihanTableComponent } from './components-tagihan/tagihan-table/tagihan-table.component';
import { AccountNavItemComponent } from './components/account-nav-item/account-nav-item.component';
import { AccountNavigationBarComponent } from './components/account-navigation-bar/account-navigation-bar.component';
import { InfoPersonalRowComponent } from './components/info-personal-row/info-personal-row.component';
import { InfoPerusahaanAddressCardComponent } from './components/info-perusahaan-address-card/info-perusahaan-address-card.component';
import { AccountDashboardComponent } from './pages/account-dashboard/account-dashboard.component';
import { AccountInfoPersonalComponent } from './pages/account-info-personal/account-info-personal.component';
import { AccountInfoPerusahaanComponent } from './pages/account-info-perusahaan/account-info-perusahaan.component';
import { AccountKelolaPurchaserComponent } from './pages/account-kelola-purchaser/account-kelola-purchaser.component';
import { AccountKreditPerusahaanComponent } from './pages/account-kredit-perusahaan/account-kredit-perusahaan.component';
import { AccountLayoutComponent } from './pages/account-layout/account-layout.component';
import { AccountTagihanComponent } from './pages/account-tagihan/account-tagihan.component';
import { EditAlamatDialogComponent } from './components-info-perusahaan/edit-alamat-dialog/edit-alamat-dialog.component';

@NgModule({
	declarations: [
		AccountLayoutComponent,
		AccountNavigationBarComponent,
		AccountNavItemComponent,
		AccountDashboardComponent,
		AccountInfoPersonalComponent,
		InfoPersonalRowComponent,
		AccountInfoPerusahaanComponent,
		InfoPerusahaanAddressCardComponent,
		TrashCanComponent,
		EditComponent,
		SetUtamaButtonComponent,
		NameAddressComponent,
		AccountKreditPerusahaanComponent,
		SilinderComponent,
		CentangImageComponent,
		KreditTableComponent,
		AccountKelolaPurchaserComponent,
		AddButtonComponent,
		PurchaserCardComponent,
		PurchaserListComponent,
		AccountTagihanComponent,
		TagihanTableComponent,
		AddPurchaserEditorComponent,
		DeletePurchaserConfirmationDialogComponent,
		TambahAlamatBaruDialogComponent,
		RoundedInputComponent,
		LabelInputComponent,
		EditAlamatDialogComponent,
	],
	imports: [CommonModule, AccountRoutingModule, SharedModule, FormsModule],
})
export class AccountModule {}
