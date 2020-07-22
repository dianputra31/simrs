import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddressSectionComponent } from './components/address-section/address-section.component';
import { CatalogCardButtonComponent } from './components/catalog-card-button/catalog-card-button.component';
import { CatalogCardComponent } from './components/catalog-card/catalog-card.component';
import { DialogAddressSectionComponent } from './components/dialog-address-section/dialog-address-section.component';
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
	],
	imports: [CommonModule, FormsModule],
	exports: [
		CatalogCardComponent,
		CatalogCardButtonComponent,
		AddressSectionComponent,
		DialogAddressSectionComponent,
		WhiteSpaceVerticalComponent,
		WhiteSpaceHorizontalComponent,
	],
})
export class SharedModule {}
