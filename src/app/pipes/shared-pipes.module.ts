import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RupiahPipe } from './rupiah.pipe';

@NgModule({
	imports: [CommonModule],
	declarations: [RupiahPipe],
	exports: [RupiahPipe],
})
export class SharedPipesModule {}
