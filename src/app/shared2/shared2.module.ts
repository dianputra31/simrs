import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedPipesModule } from '../pipes/shared-pipes.module';
import { ItemTelahDihapusComponent } from './components/item-telah-dihapus/item-telah-dihapus.component';
import { PutInCartNotificationComponent } from './components/put-in-cart-notification/put-in-cart-notification.component';
import { RoundedGrayButtonComponent } from './components/rounded-gray-button/rounded-gray-button.component';
import { RoundedRedButtonComponent } from './components/rounded-red-button/rounded-red-button.component';

@NgModule({
	declarations: [
		RoundedRedButtonComponent,
		RoundedGrayButtonComponent,
		ItemTelahDihapusComponent,
		PutInCartNotificationComponent,
	],
	imports: [CommonModule, SharedPipesModule],
	exports: [
		RoundedRedButtonComponent,
		RoundedGrayButtonComponent,
		ItemTelahDihapusComponent,
		PutInCartNotificationComponent,
	],
})
export class Shared2Module {}
