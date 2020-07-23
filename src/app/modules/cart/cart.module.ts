import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartEmptyComponent } from './components/cart-empty/cart-empty.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { PilihSemuaComponent } from './components/pilih-semua/pilih-semua.component';
import { CartLayoutComponent } from './pages/cart-layout/cart-layout.component';
@NgModule({
	declarations: [
		CartLayoutComponent,
		CartEmptyComponent,
		PilihSemuaComponent,
		ItemListComponent,
	],
	imports: [CommonModule, CartRoutingModule, SharedModule],
})
export class CartModule {}
