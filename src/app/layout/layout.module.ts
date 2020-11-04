import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockUIModule } from 'ng-block-ui';
import { NgOtpInputModule } from 'ng-otp-input';
import { CountdownModule } from 'ngx-countdown';
import { AuthService } from '../core/auth/service/auth.service';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { HeaderCategoryButtonComponent } from './components/header-category-button/header-category-button.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LoginLayoutComponent } from './pages/login-layout/login-layout.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { LoginLayout2Component } from './pages/login-layout2/login-layout2.component';
import { LoginCard2Component } from './components/login-card2/login-card2.component';



@NgModule({
	declarations: [
		LoginLayoutComponent,
		LoginCardComponent,
		MainLayoutComponent,
		HeaderComponent,
		HeaderCategoryButtonComponent,
		LoginLayout2Component,
		LoginCard2Component,
	],
	imports: [
		CommonModule,
		LayoutRoutingModule,
		MaterialModule,
		HttpClientModule,
		ReactiveFormsModule,
		NgbDropdownModule,
		NgbModule,
		SharedModule,
		NgOtpInputModule,
		CountdownModule,
		BlockUIModule.forRoot(),

	],
	providers: [AuthService],
})
export class LayoutModule { }
