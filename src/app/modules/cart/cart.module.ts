import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartLayoutComponent } from './pages/cart-layout/cart-layout.component';
import { ItemListComponent } from './components/item-list/item-list.component';

@NgModule({
	declarations: [CartLayoutComponent, ItemListComponent],
	imports: [CommonModule, CartRoutingModule, SharedModule],
})
export class CartModule {}
