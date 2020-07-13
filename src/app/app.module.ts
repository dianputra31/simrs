import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthModule } from './core/auth/auth.module';
import { AuthService } from './core/auth/service/auth.service';
import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from './material.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		AuthModule,
		BrowserModule,
		LayoutModule,
		RouterModule.forRoot([], {
			scrollPositionRestoration: 'top',
		}),
		BrowserAnimationsModule,
		MaterialModule,
	],
	providers: [AuthService],
	bootstrap: [AppComponent],
})
export class AppModule {}
