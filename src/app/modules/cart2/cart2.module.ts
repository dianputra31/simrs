import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedPipesModule } from '../../pipes/shared-pipes.module';
import { SharedModule } from '../../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { EmptyCartComponent } from './components/empty-cart/empty-cart.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { CartLayoutComponent } from './pages/cart-layout/cart-layout.component';

@NgModule({
	declarations: [CartLayoutComponent, EmptyCartComponent, ItemCardComponent],
	imports: [CartRoutingModule, CommonModule, SharedModule, SharedPipesModule],
})
export class Cart2Module {}
