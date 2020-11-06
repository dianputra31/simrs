import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoundedGrayButtonComponent } from './components/rounded-gray-button/rounded-gray-button.component';
import { RoundedRedButtonComponent } from './components/rounded-red-button/rounded-red-button.component';

@NgModule({
	declarations: [RoundedRedButtonComponent, RoundedGrayButtonComponent],
	imports: [CommonModule],
	exports: [RoundedRedButtonComponent, RoundedGrayButtonComponent],
})
export class Shared2Module {}
