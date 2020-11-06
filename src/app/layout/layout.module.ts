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
import { SharedPipesModule } from '../pipes/shared-pipes.module';
import { SharedModule } from '../shared/shared.module';
import { Shared2Module } from '../shared2/shared2.module';
import { GetOtpButtonComponent } from './components/get-otp-button/get-otp-button.component';
import { HeaderCategoryButtonComponent } from './components/header-category-button/header-category-button.component';
import { HeaderComponent } from './components/header/header.component';
import { KirimUlangButtonComponent } from './components/kirim-ulang-button/kirim-ulang-button.component';
import { LoginCard2Component } from './components/login-card2/login-card2.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LoginLayout2Component } from './pages/login-layout2/login-layout2.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';

@NgModule({
	declarations: [
		MainLayoutComponent,
		HeaderComponent,
		HeaderCategoryButtonComponent,
		LoginLayout2Component,
		LoginCard2Component,
		GetOtpButtonComponent,
		KirimUlangButtonComponent,
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
		Shared2Module,
		NgOtpInputModule,
		CountdownModule,
		BlockUIModule.forRoot(),
		SharedPipesModule,
	],
	providers: [AuthService],
})
export class LayoutModule {}
