import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartLayoutComponent } from './pages/cart-layout/cart-layout.component';
import { EmptyCartComponent } from './components/empty-cart/empty-cart.component';
import { ItemCardComponent } from './components/item-card/item-card.component';

@NgModule({
	declarations: [CartLayoutComponent, EmptyCartComponent, ItemCardComponent],
	imports: [CartRoutingModule, CommonModule, SharedModule],
})
export class Cart2Module {}
