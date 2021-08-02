import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KamarRoutingModule } from './kamar-routing.module';
import { KamarLayoutComponent } from './pages/kamar-layout/kamar-layout.component';


@NgModule({
  declarations: [KamarLayoutComponent],
  imports: [
    CommonModule,
    KamarRoutingModule
  ]
})
export class KamarModule { }
