import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { SharedPipesModule } from '../pipes/shared-pipes.module';
import { Shared2Module } from '../shared2/shared2.module';
import { AddressSectionComponent } from './components/address-section/address-section.component';
import { AnyAlertComponent } from './components/any-alert/any-alert.component';
import { BoxCartPriceComponent } from './components/box-cart-price/box-cart-price.component';
import { ButtonGrayComponent } from './components/button-gray/button-gray.component';
import { CartItemListComponent } from './components/cart-item-list/cart-item-list.component';
import { CatalogCardButtonComponent } from './components/catalog-card-button/catalog-card-button.component';
import { CatalogCardComponent } from './components/catalog-card/catalog-card.component';
import { CheckBoxRoundComponent } from './components/check-box-round/check-box-round.component';
import { CheckBoxTwoComponent } from './components/check-box-two/check-box-two.component';
import { DateDropdownComponent } from './components/date-dropdown/date-dropdown.component';
import { DialogAddressSectionComponent } from './components/dialog-address-section/dialog-address-section.component';
import { DiscountHargaCoretComponent } from './components/discount-harga-coret/discount-harga-coret.component';
import { EmailButtonComponent } from './components/email-button/email-button.component';
import { EmptyCartComponent } from './components/empty-cart/empty-cart.component';
import { FilterDeliveryAddressComponent } from './components/filter-delivery-address/filter-delivery-address.component';
import { FilterDropdownListComponent } from './components/filter-dropdown-list/filter-dropdown-list.component';
import { FilterInputComponent } from './components/filter-input/filter-input.component';
import { FilterPurchaserComponent } from './components/filter-purchaser/filter-purchaser.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { FooterCustomerSupportComponent } from './components/footer-customer-support/footer-customer-support.component';
import { FooterFeatureComponent } from './components/footer-feature/footer-feature.component';
import { FooterComponent } from './components/footer/footer.component';
import { HorizontalLineComponent } from './components/horizontal-line/horizontal-line.component';
import { InputDropdownComponent } from './components/input-dropdown/input-dropdown.component';
import { ItemDescComponent } from './components/item-desc/item-desc.component';
import { NestDatepickerAComponent } from './components/nest-datepicker-a/nest-datepicker-a.component';
import { NestDatepickerBComponent } from './components/nest-datepicker-b/nest-datepicker-b.component';
import { NestDatepickerWrapperComponent } from './components/nest-datepicker-wrapper/nest-datepicker-wrapper.component';
import { PopUpDialogComponent } from './components/pop-up-dialog/pop-up-dialog.component';
import { PopUpRequestApprovalComponent } from './components/pop-up-request-approval/pop-up-request-approval.component';
import { QtyCtrlTwoComponent } from './components/qty-ctrl-two/qty-ctrl-two.component';
import { QtyCtrlComponent } from './components/qty-ctrl/qty-ctrl.component';
import { RangeDatepickerComponent } from './components/range-datepicker/range-datepicker.component';
import { RatingDialogComponent } from './components/rating-dialog/rating-dialog.component';
import { RedBgButtonComponent } from './components/red-bg-button/red-bg-button.component';
import { RedBorderWhiteBgButtonComponent } from './components/red-border-white-bg-button/red-border-white-bg-button.component';
import { RedButtonComponent } from './components/red-button/red-button.component';
import { ResetFilterComponent } from './components/reset-filter/reset-filter.component';
import { StarComponent } from './components/star/star.component';
import { WhiteSpaceHorizontalComponent } from './components/white-space-horizontal/white-space-horizontal.component';
import { WhiteSpaceVerticalComponent } from './components/white-space-vertical/white-space-vertical.component';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
registerLocaleData(en);

const antDesignIcons = AllIcons as {
	[key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
	(key) => antDesignIcons[key]
);

@NgModule({
	declarations: [
		CatalogCardComponent,
		CatalogCardButtonComponent,
		AddressSectionComponent,
		DialogAddressSectionComponent,
		WhiteSpaceVerticalComponent,
		WhiteSpaceHorizontalComponent,
		DiscountHargaCoretComponent,
		FooterBarComponent,
		FooterCustomerSupportComponent,
		FooterFeatureComponent,
		FooterComponent,
		EmailButtonComponent,
		BoxCartPriceComponent,
		CheckBoxRoundComponent,
		QtyCtrlComponent,
		CartItemListComponent,
		PopUpRequestApprovalComponent,
		PopUpDialogComponent,
		NestDatepickerAComponent,
		FilterInputComponent,
		FilterPurchaserComponent,
		FilterDeliveryAddressComponent,
		ItemDescComponent,
		FilterDropdownListComponent,
		RedBorderWhiteBgButtonComponent,
		RedBgButtonComponent,
		NestDatepickerBComponent,
		NestDatepickerWrapperComponent,
		ResetFilterComponent,
		DateDropdownComponent,
		HorizontalLineComponent,
		ButtonGrayComponent,
		FilterPurchaserComponent,
		FilterDeliveryAddressComponent,
		CheckBoxTwoComponent,
		QtyCtrlTwoComponent,
		RedButtonComponent,
		InputDropdownComponent,
		EmptyCartComponent,
		RangeDatepickerComponent,
		AnyAlertComponent,
		RatingDialogComponent,
		StarComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		NgbModule,
		SharedPipesModule,
		DemoNgZorroAntdModule,
		Shared2Module,
	],
	exports: [
		AnyAlertComponent,
		InputDropdownComponent,
		CatalogCardComponent,
		CatalogCardButtonComponent,
		AddressSectionComponent,
		DialogAddressSectionComponent,
		WhiteSpaceVerticalComponent,
		WhiteSpaceHorizontalComponent,
		DiscountHargaCoretComponent,
		FooterBarComponent,
		FooterCustomerSupportComponent,
		FooterFeatureComponent,
		FooterComponent,
		EmailButtonComponent,
		BoxCartPriceComponent,
		CheckBoxRoundComponent,
		QtyCtrlComponent,
		CartItemListComponent,
		NestDatepickerAComponent,
		FilterInputComponent,
		FilterPurchaserComponent,
		FilterDeliveryAddressComponent,
		ItemDescComponent,
		FilterDropdownListComponent,
		RedBorderWhiteBgButtonComponent,
		RedBgButtonComponent,
		NestDatepickerBComponent,
		ResetFilterComponent,
		DateDropdownComponent,
		HorizontalLineComponent,
		ButtonGrayComponent,
		CheckBoxTwoComponent,
		QtyCtrlTwoComponent,
		RedButtonComponent,
		EmptyCartComponent,
		RangeDatepickerComponent,
		RatingDialogComponent,
	],
	providers: [
		{ provide: NZ_I18N, useValue: en_US },
		{ provide: NZ_ICONS, useValue: icons },
	],
})
export class SharedModule {}
