import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLayoutComponent } from './pages/login-layout/login-layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { MaterialModule } from '../material.module';
import { AuthService } from '../core/auth/service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';

@NgModule({
  declarations: [LoginLayoutComponent, LoginCardComponent, MainLayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
    HttpClientModule,
		ReactiveFormsModule
  ],
  providers: [AuthService]
})
export class LayoutModule { }
