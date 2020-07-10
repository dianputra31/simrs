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
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { FooterFeatureComponent } from './components/footer-feature/footer-feature.component';
import { FooterCustomerSupportComponent } from './components/footer-customer-support/footer-customer-support.component';

@NgModule({
  declarations: [LoginLayoutComponent, LoginCardComponent, MainLayoutComponent, HeaderComponent, FooterComponent, FooterBarComponent, FooterFeatureComponent, FooterCustomerSupportComponent],
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
