import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CatalogCardButtonComponent } from './components/catalog-card-button/catalog-card-button.component';
import { CatalogCardComponent } from './components/catalog-card/catalog-card.component';

@NgModule({
	declarations: [CatalogCardComponent, CatalogCardButtonComponent],
	imports: [CommonModule, FormsModule],
	exports: [CatalogCardComponent, CatalogCardButtonComponent],
})
export class SharedModule {}
