import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockUIModule } from 'ng-block-ui';
import { SharedPipesModule } from '../../pipes/shared-pipes.module';
import { TanggalPipe } from '../../pipes/tanggal.pipe';
import { SharedModule } from '../../shared/shared.module';
import { ProcessLogoComponent } from './components/process-logo/process-logo.component';
import { SelesaiConfirmationDialogComponent } from './components/selesai-confirmation-dialog/selesai-confirmation-dialog.component';
import { StatusAlasanComponent } from './components/status-alasan/status-alasan.component';
import { StatusLabelComponent } from './components/status-label/status-label.component';
import { StatusPembelianComponent } from './components/status-pembelian/status-pembelian.component';
import { TransactionDetailLayoutComponent } from './pages/transaction-detail-layout/transaction-detail-layout.component';
import { TransactionDetailRoutingModule } from './transaction-detail-routing.module';

@NgModule({
	declarations: [
		TransactionDetailLayoutComponent,
		StatusPembelianComponent,
		StatusLabelComponent,
		StatusAlasanComponent,
		ProcessLogoComponent,
		SelesaiConfirmationDialogComponent,
	],
	imports: [
		CommonModule,
		TransactionDetailRoutingModule,
		SharedModule,
		BlockUIModule.forRoot(),
		SharedPipesModule,
	],
	providers: [TanggalPipe],
})
export class TransactionDetailModule {}
