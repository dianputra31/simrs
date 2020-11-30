import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItemTelahDihapusComponent } from './components/item-telah-dihapus/item-telah-dihapus.component';
import { RoundedGrayButtonComponent } from './components/rounded-gray-button/rounded-gray-button.component';
import { RoundedRedButtonComponent } from './components/rounded-red-button/rounded-red-button.component';

@NgModule({
	declarations: [
		RoundedRedButtonComponent,
		RoundedGrayButtonComponent,
		ItemTelahDihapusComponent,
	],
	imports: [CommonModule],
	exports: [
		RoundedRedButtonComponent,
		RoundedGrayButtonComponent,
		ItemTelahDihapusComponent,
	],
})
export class Shared2Module {}
