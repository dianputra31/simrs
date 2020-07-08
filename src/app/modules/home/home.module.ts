import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/app/transaction/pages/layout/layout.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';



@NgModule({
  declarations: [ LayoutComponent, HomeLayoutComponent],
  imports: [
    CommonModule,RouterModule, HomeRoutingModule
  ]
})
export class HomeModule { }
