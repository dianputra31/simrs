import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddressSectionComponent } from './components/address-section/address-section.component';
import { BoxCartPriceComponent } from './components/box-cart-price/box-cart-price.component';
import { CartItemListComponent } from './components/cart-item-list/cart-item-list.component';
import { CatalogCardButtonComponent } from './components/catalog-card-button/catalog-card-button.component';
import { CatalogCardComponent } from './components/catalog-card/catalog-card.component';
import { CheckBoxRoundComponent } from './components/check-box-round/check-box-round.component';
import { DialogAddressSectionComponent } from './components/dialog-address-section/dialog-address-section.component';
import { DiscountHargaCoretComponent } from './components/discount-harga-coret/discount-harga-coret.component';
import { EmailButtonComponent } from './components/email-button/email-button.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { FooterCustomerSupportComponent } from './components/footer-customer-support/footer-customer-support.component';
import { FooterFeatureComponent } from './components/footer-feature/footer-feature.component';
import { FooterComponent } from './components/footer/footer.component';
import { QtyCtrlComponent } from './components/qty-ctrl/qty-ctrl.component';
import { WhiteSpaceHorizontalComponent } from './components/white-space-horizontal/white-space-horizontal.component';
import { WhiteSpaceVerticalComponent } from './components/white-space-vertical/white-space-vertical.component';
import { PopUpRequestApprovalComponent } from './components/pop-up-request-approval/pop-up-request-approval.component';

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

	],
	imports: [CommonModule, FormsModule],
	exports: [
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

	],
})
export class SharedModule { }
