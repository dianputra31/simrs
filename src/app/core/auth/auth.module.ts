import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageModule } from '../storage/storage.module';
import { AuthService } from './service/auth.service';
import { StorageService } from '../storage/service/storage.service';
import { AuthGuard } from './guard/auth.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StorageModule
  ],
  providers: [AuthService,StorageService, AuthGuard]
})
export class AuthModule { }
