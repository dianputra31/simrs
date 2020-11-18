import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RupiahPipe } from './rupiah.pipe';
import { TanggalPipe } from './tanggal.pipe';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
	imports: [CommonModule],
	declarations: [RupiahPipe, TanggalPipe, TruncatePipe],
	exports: [RupiahPipe, TanggalPipe, TruncatePipe],
})
export class SharedPipesModule {}
