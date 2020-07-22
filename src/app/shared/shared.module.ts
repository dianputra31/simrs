import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddressSectionComponent } from './components/address-section/address-section.component';
import { CatalogCardButtonComponent } from './components/catalog-card-button/catalog-card-button.component';
import { CatalogCardComponent } from './components/catalog-card/catalog-card.component';
import { DialogAddressSectionComponent } from './components/dialog-address-section/dialog-address-section.component';
import { DiscountHargaCoretComponent } from './components/discount-harga-coret/discount-harga-coret.component';
import { EmailButtonComponent } from './components/email-button/email-button.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { FooterCustomerSupportComponent } from './components/footer-customer-support/footer-customer-support.component';
import { FooterFeatureComponent } from './components/footer-feature/footer-feature.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhiteSpaceHorizontalComponent } from './components/white-space-horizontal/white-space-horizontal.component';
import { WhiteSpaceVerticalComponent } from './components/white-space-vertical/white-space-vertical.component';


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
	],
})
export class SharedModule { }
