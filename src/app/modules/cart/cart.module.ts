import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartLayoutComponent } from './pages/cart-layout/cart-layout.component';

@NgModule({
	declarations: [CartLayoutComponent],
	imports: [CommonModule, CartRoutingModule, SharedModule],
})
export class CartModule {}
