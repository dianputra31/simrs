import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RsRujukanRoutingModule } from './rs-rujukan-routing.module';
import { RsRujukanLayoutComponent } from './pages/rs-rujukan-layout/rs-rujukan-layout.component';


@NgModule({
  declarations: [RsRujukanLayoutComponent],
  imports: [
    CommonModule,
    RsRujukanRoutingModule
  ]
})
export class RsRujukanModule { }
