import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockUIModule } from 'ng-block-ui';
import { SharedPipesModule } from '../../pipes/shared-pipes.module';
import { SharedModule } from '../../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { EmptyCartComponent } from './components/empty-cart/empty-cart.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { CartLayoutComponent } from './pages/cart-layout/cart-layout.component';
import { PilihSemuaComponent } from './components/pilih-semua/pilih-semua.component';

@NgModule({
	declarations: [CartLayoutComponent, EmptyCartComponent, ItemCardComponent, PilihSemuaComponent],
	imports: [
		CartRoutingModule,
		CommonModule,
		SharedModule,
		SharedPipesModule,
		BlockUIModule.forRoot(),
	],
})
export class Cart2Module {}
