import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockUIModule } from 'ng-block-ui';
import { SharedPipesModule } from '../../pipes/shared-pipes.module';
import { SharedModule } from '../../shared/shared.module';
import { DetailPesananComponent } from './components/detail-pesanan/detail-pesanan.component';
import { ProcessLogoComponent } from './components/process-logo/process-logo.component';
import { RekapTagihanComponent } from './components/rekap-tagihan/rekap-tagihan.component';
import { StatusAlasanComponent } from './components/status-alasan/status-alasan.component';
import { StatusLabelComponent } from './components/status-label/status-label.component';
import { StatusPembelianComponent } from './components/status-pembelian/status-pembelian.component';
import { StatusPesananComponent } from './components/status-pesanan/status-pesanan.component';
import { TransactionDetailLayoutComponent } from './pages/transaction-detail-layout/transaction-detail-layout.component';
import { TransactionDetailRoutingModule } from './transaction-detail-routing.module';

@NgModule({
	declarations: [
		TransactionDetailLayoutComponent,
		StatusPesananComponent,
		DetailPesananComponent,
		RekapTagihanComponent,
		StatusPembelianComponent,
		StatusLabelComponent,
		StatusAlasanComponent,
		ProcessLogoComponent,
	],
	imports: [
		CommonModule,
		TransactionDetailRoutingModule,
		SharedModule,
		BlockUIModule.forRoot(),
		SharedPipesModule,
	],
})
export class TransactionDetailModule {}
