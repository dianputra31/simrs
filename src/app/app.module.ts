import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AuthModule } from './core/auth/auth.module';
import { AuthInterceptor } from './core/auth/interceptor/auth.interceptor';
import { AuthService } from './core/auth/service/auth.service';
import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from './material.module';
import { NgbdToastGlobal } from './shared/toast/toast-global.component';
import { ToastsContainer } from './shared/toast/toasts-container.component';

@NgModule({
	declarations: [AppComponent, NgbdToastGlobal, ToastsContainer],
	imports: [
		AuthModule,
		BrowserModule,
		LayoutModule,
		RouterModule.forRoot([], {
			scrollPositionRestoration: 'top',
		}),
		BrowserAnimationsModule,
		MaterialModule,
		NgbModule,
	],
	providers: [
		/* Configuration about localization */
		{
			provide: LOCALE_ID,
			useValue: 'id',
		},
		/* Declare service for this module */
		{
			deps: [AuthService],
			multi: true,
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
		},
	],
	bootstrap: [AppComponent, NgbdToastGlobal],
})
export class AppModule {}
