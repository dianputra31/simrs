import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartLayoutComponent } from './pages/cart-layout/cart-layout.component';
import { CartEmptyComponent } from './components/cart-empty/cart-empty.component';

@NgModule({
	declarations: [CartLayoutComponent, CartEmptyComponent],
	imports: [CommonModule, CartRoutingModule, SharedModule],
})
export class CartModule {}
