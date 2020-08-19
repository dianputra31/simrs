import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TransactionDetailLayoutComponent } from './pages/transaction-detail-layout/transaction-detail-layout.component';
import { TransactionDetailRoutingModule } from './transaction-detail-routing.module';
import { StatusPesananComponent } from './components/status-pesanan/status-pesanan.component';
import { DetailPesananComponent } from './components/detail-pesanan/detail-pesanan.component';
import { RekapTagihanComponent } from './components/rekap-tagihan/rekap-tagihan.component';




@NgModule({
	declarations: [TransactionDetailLayoutComponent, StatusPesananComponent, DetailPesananComponent, RekapTagihanComponent],
	imports: [
		CommonModule,
		TransactionDetailRoutingModule,
		SharedModule
	]
})
export class TransactionDetailModule { }
