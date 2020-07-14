import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../core/auth/service/auth.service';
import { MaterialModule } from '../material.module';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { FooterCustomerSupportComponent } from './components/footer-customer-support/footer-customer-support.component';
import { FooterFeatureComponent } from './components/footer-feature/footer-feature.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderCategoryButtonComponent } from './components/header-category-button/header-category-button.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LoginLayoutComponent } from './pages/login-layout/login-layout.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { EmailButtonComponent } from './components/email-button/email-button.component';

@NgModule({
	declarations: [
		LoginLayoutComponent,
		LoginCardComponent,
		MainLayoutComponent,
		HeaderComponent,
		FooterComponent,
		FooterBarComponent,
		FooterFeatureComponent,
		FooterCustomerSupportComponent,
		HeaderCategoryButtonComponent,
		EmailButtonComponent,
	],
	imports: [
		CommonModule,
		LayoutRoutingModule,
		MaterialModule,
		HttpClientModule,
		ReactiveFormsModule,
		NgbDropdownModule,
		NgbModule,
	],
	providers: [AuthService],
})
export class LayoutModule { }
