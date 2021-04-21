import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockUIModule } from 'ng-block-ui';
import { SharedPipesModule } from '../../pipes/shared-pipes.module';
import { SharedModule } from '../../shared/shared.module';
import { Shared2Module } from '../../shared2/shared2.module';
import { CartRoutingModule } from './cart-routing.module';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { PilihSemuaComponent } from './components/pilih-semua/pilih-semua.component';
import { CartLayoutComponent } from './pages/cart-layout/cart-layout.component';

@NgModule({
	declarations: [CartLayoutComponent, ItemCardComponent, PilihSemuaComponent],
	imports: [
		CartRoutingModule,
		CommonModule,
		SharedModule,
		Shared2Module,
		SharedPipesModule,
		BlockUIModule.forRoot(),
	],
})
export class Cart2Module {}
