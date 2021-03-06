import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockUIModule } from 'ng-block-ui';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedPipesModule } from '../../pipes/shared-pipes.module';
import { DemoNgZorroAntdModule } from '../../shared/ng-zorro-antd.module';
import { SharedModule } from '../../shared/shared.module';
import { Shared2Module } from '../../shared2/shared2.module';
import { AccountRoutingModule } from './account-routing.module';
import { EditAlamatDialogComponent } from './components-info-perusahaan/edit-alamat-dialog/edit-alamat-dialog.component';
import { EditComponent } from './components-info-perusahaan/edit/edit.component';
import { NameAddressComponent } from './components-info-perusahaan/name-address/name-address.component';
import { SetUtamaButtonComponent } from './components-info-perusahaan/set-utama-button/set-utama-button.component';
import { TrashCanDialogComponent } from './components-info-perusahaan/trash-can-dialog/trash-can-dialog.component';
import { TrashCanComponent } from './components-info-perusahaan/trash-can/trash-can.component';
import { AddButtonComponent } from './components-kelola-purchaser/add-button/add-button.component';
import { AddPurchaserEditorComponent } from './components-kelola-purchaser/add-purchaser-editor/add-purchaser-editor.component';
import { DeletePurchaserConfirmationDialogComponent } from './components-kelola-purchaser/delete-purchaser-confirmation-dialog/delete-purchaser-confirmation-dialog.component';
import { PurchaserCardComponent } from './components-kelola-purchaser/purchaser-card/purchaser-card.component';
import { CentangImageComponent } from './components-kredit-perusahaan/centang-image/centang-image.component';
import { KreditDataComponent } from './components-kredit-perusahaan/kredit-data/kredit-data.component';
import { KreditTableComponent } from './components-kredit-perusahaan/kredit-table/kredit-table.component';
import { SilinderComponent } from './components-kredit-perusahaan/silinder/silinder.component';
import { TagihanDataComponent } from './components-tagihan/tagihan-data/tagihan-data.component';
import { TagihanTableComponent } from './components-tagihan/tagihan-table/tagihan-table.component';
import { AccountNavItemComponent } from './components/account-nav-item/account-nav-item.component';
import { AccountNavigationBarComponent } from './components/account-navigation-bar/account-navigation-bar.component';
import { ChartDropdownComponent } from './components/chart-dropdown/chart-dropdown.component';
import { InfoPersonalRowComponent } from './components/info-personal-row/info-personal-row.component';
import { InfoPerusahaanAddressCardComponent } from './components/info-perusahaan-address-card/info-perusahaan-address-card.component';
import { OutputGraphComponent } from './components/output-graph/output-graph.component';
import { SidebarAccountComponent } from './components/sidebar-account/sidebar-account.component';
import { AccountDashboardComponent } from './pages/account-dashboard/account-dashboard.component';
import { AccountInfoPersonalComponent } from './pages/account-info-personal/account-info-personal.component';
import { AccountInfoPerusahaanComponent } from './pages/account-info-perusahaan/account-info-perusahaan.component';
import { AccountKelolaPurchaserComponent } from './pages/account-kelola-purchaser/account-kelola-purchaser.component';
import { AccountKreditPerusahaanComponent } from './pages/account-kredit-perusahaan/account-kredit-perusahaan.component';
import { AccountLayoutComponent } from './pages/account-layout/account-layout.component';
import { AccountTagihanPrintComponent } from './pages/account-tagihan-print/account-tagihan-print.component';
import { AccountTagihanComponent } from './pages/account-tagihan/account-tagihan.component';
import { DashboardDatepickerComponent } from './components/dashboard-datepicker/dashboard-datepicker.component';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
	[key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
	(key) => antDesignIcons[key]
);
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
		AccountTagihanComponent,
		TagihanTableComponent,
		AddPurchaserEditorComponent,
		DeletePurchaserConfirmationDialogComponent,
		// TambahAlamatBaruDialogComponent,
		// RoundedInputComponent,
		// LabelInputComponent,
		EditAlamatDialogComponent,
		OutputGraphComponent,
		TrashCanDialogComponent,
		AccountTagihanPrintComponent,
		KreditDataComponent,
		TagihanDataComponent,
		SidebarAccountComponent,
		ChartDropdownComponent,
		DashboardDatepickerComponent,
	],
	imports: [
		CommonModule,
		AccountRoutingModule,
		SharedModule,
		FormsModule,
		SharedPipesModule,
		HttpClientModule,
		BlockUIModule.forRoot(),
		DemoNgZorroAntdModule,
		InfiniteScrollModule,
		NgbDropdownModule,
		Shared2Module,
	],
	providers: [
		{ provide: NZ_I18N, useValue: en_US },
		{ provide: NZ_ICONS, useValue: icons },
	],
})
export class AccountModule {}
