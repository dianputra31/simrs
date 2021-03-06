import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AuthModule } from './core/auth/auth.module';
import { AuthInterceptor } from './core/auth/interceptor/auth.interceptor';
import { StorageService } from './core/storage/service/storage.service';
import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from './material.module';
import { SharedService } from './shared/services/shared.service';
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
			useHash: true,
		}),
		BrowserAnimationsModule,
		MaterialModule,
		NgbModule,
		HttpClientModule,
	],
	providers: [
		/* Declare service for this module */
		{
			deps: [StorageService],
			multi: true,
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
		},
		SharedService,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
